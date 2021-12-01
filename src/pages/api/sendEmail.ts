import nodemailer from 'nodemailer';

import type { NextApiRequest, NextApiResponse } from 'next';
import { FieldInitalInput } from '../index';
import { formValidation } from '../../assets/yup/sendEmail';

export default async function sendEmail(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const data = request.body as FieldInitalInput;

    try {
      await formValidation.validate(data, { abortEarly: false })
    } catch (error: any) {
      console.log(JSON.parse(JSON.stringify(error)).errors)
      return response.status(400).json({
        status: false,
        data: null,
        error: "error",
      });
    }

    let transporter = nodemailer.createTransport({
      host: 'smtps.uol.com.br',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    try {
      // await transporter.sendMail({
      //   from: 'contato@milinset.com.br',
      //   to: 'contato@milinset.com.br',
      //   replyTo: data.email,
      //   subject: "[CONTATO] "+ data.name,
      //   html: `
      //     <h4>${data.name}</h4>
      //     <p>E-mail: ${data.email}</p>
      //     <p>${data.message}</p>
      //   `
      // });

      return response.status(200).json({
        error: null,
        data: 'E-mail enviado',
        status: true,
      })
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        data: null,
        error: 'Houve um erro interno no servidor estamos tentando resolve-lo',
        status: false,
      })
    }
  } else {
    response.status(400).json({ message: "Not Found" });
  }
}