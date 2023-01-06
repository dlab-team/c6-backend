const express = require('express')
const authRouter = express.Router()
const authControllers = require('./authControllers')

authRouter.post('/auth/register', authControllers.registerUser)
authRouter.post('/auth/login', authControllers.login)
authRouter.post('api/auth/recovery', (req, res) => {
  const email = req.body.email

  // Find the user with the given email
  User.findOne({ email: email }, (err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Generate a password reset token
    const token = generateToken()

    // Save the token to the user's account
    user.passwordResetToken = token
    user.passwordResetExpires = Date.now() + 3600000 // 1 hour
    user.save((err) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }

      // Send the password reset email
      const mailOptions = {
        to: email,
        subject: 'Password reset',
        text: `Please use the following token to reset your password: ${token}`
      }
      mailer.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).json({ error: err.message })
        }

        res.json({ message: 'A password reset email has been sent' })
      })
    })
  })
})

app.post('/api/reset-password', (req, res) => {
  const token = req.body.token
  const password = req.body.password

  // Find the user with the given password reset token
  User.findOne({ passwordResetToken: token }, (err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Check if the token has expired
    if (user.passwordResetExpires < Date.now()) {
      return res.status(400).json({ error: 'Token has expired' })
    }

    // Update the user's password
    user.password = password
    user.passwordResetToken = null
    user.passwordResetExpires = null
    user.save((err) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }

      res.json({ message: 'Password has been reset' })
    })
  })
})

module.exports = authRouter
