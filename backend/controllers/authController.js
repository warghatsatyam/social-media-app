const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Signup
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    console.log("Checking User",user);
    if (user) return res.status(400).json({ error: 'Email already in use' });
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user = new User({
      email,
      password: hashedPassword,
    });
    console.log("Creating User",user);
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Signup error:', error.message, error.stack);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Token",token);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Email not found' });

    const resetToken = Math.random().toString(36).slice(2);
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log('Reset Token: ',resetToken)
    await transporter.sendMail({
      to: email,
      subject: 'Password Reset',
      text: `Reset your password: http://localhost:3000/reset-password/${resetToken}`,
    });

    res.json({ message: 'Reset link sent' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken,
      resetTokenExpiration: { $gt: Date.now() },
    });
    if (!user) return res.status(400).json({ error: 'Invalid or expired token' });

    user.password = await bcrypt.hash(newPassword, 12);
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.json({ message: 'Password updated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};