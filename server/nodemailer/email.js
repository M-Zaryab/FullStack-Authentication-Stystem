const {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} = require("./emailTemplete.js");
const { transporter } = require("./nodemailerConfig.js");

const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: "zaryabimran222@gmail.com",
    to: `${email}`,
    subject: "Verification Code | Ecommerce App",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
    category: "Email Verification",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error sending verification mail", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendForgotPasswordEmail = async (email, resetURL) => {
  const mailOptions = {
    from: "zaryabimran222@gmail.com",
    to: `${email}`,
    subject: "Reset Password | Ecommerce App",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    category: "Password Reset",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error sending forget password email", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: "zaryabimran222@gmail.com",
    to: `${email}`,
    subject: "Password Reset Successfull | Ecommerce App",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    category: "Password Reset",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error sending reset password success email", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const mailOptions = {
      from: "zaryabimran222@gmail.com",
      to: `${email}`,
      subject: "Reset your password | Auth App",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error sending reset password email", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email: ${error}`);
  }
};

const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const mailOptions = {
      from: "zaryabimran222@gmail.com",
      to: `${email}`,
      subject: `Welcome ${name} to Auth App`,
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
      category: "Welcome Email",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error sending welcome email", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};

module.exports = {
  sendVerificationEmail,
  sendForgotPasswordEmail,
  sendResetSuccessEmail,
  sendPasswordResetEmail,
  sendWelcomeEmail,
};
