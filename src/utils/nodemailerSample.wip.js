'use strict';
const nodemailer = require("nodemailer");
const fs = require('fs');
const pdf2base64 = require('pdf-to-base64');


const sixFourPdf = async() => await pdf2base64('./pdfSample.pdf');
const doMainmail = async() => {
  async function main(){
  //let testAccount = await nodemailer.createTestAccount();
  /*
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth:{
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
  */
  let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,//465,
  secure: false,//true,

  //service: "gmail",
  auth:{
    user: "inta.soul@gmail.com",
    pass: "EbAnUtSa3000RaZ"
  }
  });
  transporter.verify((err,succ) => {
    if (err){
      console.log(err);
    }else{
      console.log("Server is ready to take our messages");
    } 
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo" <inta.soul@gmail.com>',
    to: "inta.soul@gmail.com",
    subject: "Hello",
    text: "Hello World!",
    html: "<b>Hello world?!</b>",
    attachments:
    [
       {// utf-8 string as attachment
        filename:'text1.txt',
        content:'hello world!'
      },
      {//bunary buffer as ana attachment
        filename:"text2.txt",
        content: Buffer.from('hello world text2!', 'utf-8')
      },
      {//file on disk aa an attachment
        filename: 'text3.txt',
        path:'./sampleAttach.txt'
      },
      {//filename and content type is derived from path
        path:'./sampleAttach.txt'
      },
      {//filename and content type is derived from path
        path:'./pdfSample.pdf'
      },
      {// stream as an attachment
        filename: 'text4.txt',
        content:fs.createReadStream("./sampleAttach.txt")
      },
      {// define custom content type for the attachment
        filename: 'text.bin',
        content: 'hello bin',
        contentType: 'text/plain'
      },
      /*{// use URL as an attachment
        "https://github...."
       },*/
      {//encoded string as an attachment
        filename: 'text5.txt',
        content:"aGVsbG8gd29ybGQh",
        encoding:"base64"
      },
      {//encoded string as an attachment
        filename: 'textPdf.pdf',
        content: await sixFourPdf(),
        encoding:"base64"
      },
      {// data uri as an attachement
        path:'data:text/plain;base64,aGVsbG8gd29ybGQh'
      },
      {// data uri as an attachement
        path:`data:application/pdf;base64,${await sixFourPdf()}`
      },
      {//use pregenerated MIME node
        raw: "Content-Type: text/plain\r\n" + 
             "Content-Disposition:attachement;\r\n" + 
            "\r\n" +
            "Hello World from MIME!"
      }  
    ]
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };
  main().catch(console.error)
};
doMainmail();
//module.exports = doMainmail;
