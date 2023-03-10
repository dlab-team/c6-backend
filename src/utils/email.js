const nodemailer = require('nodemailer')

module.exports = {
  emailForgotPassword: async (data, token) => {
    const { email, name } = data
    const transport = nodemailer.createTransport({
      host: `${process.env.MAIL_HOST}`,
      port: `${process.env.MAIL_PORT}`,
      auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASS}`
      }
    })
    await transport.sendMail({
      from: '"Devsafio - " <devsafio@devsafio.com>',
      to: email,
      subject: 'Devsafio - Reestablecer el Password',
      text: 'Restablecer tu password',
      html: ` <div>
            <h2>hola ${name}, has solicitado reestablecer tu password</h2>
            <br />
            <p>
              En el siguiente enlace puedes volver a generar un password:
            </p>
            <br />
            <a href="${process.env.FRONT_URL}/new-password/${token}"> Comprobar Cuenta</a>
            <br />
            <br />
            <p>Si tu no solicitaste este cambio, puedes ignorar el mensaje</p>
          </div>`
    })

    console.log('Message sent to: ', email)
  }
}
