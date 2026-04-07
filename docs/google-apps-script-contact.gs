function doPost(e) {
  var data = JSON.parse(e.postData.contents);
var recipient = "info.devaigroup@gmail.com, pranavpatiliib@gmail.com";


  var subject = "New Website Inquiry | " + data.companyName;
  var plainBody = [
    "New Website Inquiry",
    "",
    "Company Name: " + data.companyName,
    "Your Name: " + data.senderName,
    "Email Address: " + data.email,
    "Phone Number: " + data.phone,
    "",
    "Message / Product Requirement:",
    data.message,
    "",
    "Submitted At: " + data.submittedAt,
    "Page URL: " + data.page
  ].join("\n");

  var htmlBody =
    '<div style="margin:0;padding:24px;background:#f4f7fb;font-family:Arial,sans-serif;color:#16365d;">' +
      '<div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dce6f2;">' +
        '<div style="background:linear-gradient(135deg,#003d82 0%,#0e4a8a 100%);padding:24px 28px;color:#ffffff;">' +
          '<div style="font-size:13px;letter-spacing:1.5px;text-transform:uppercase;opacity:0.9;">Devai Technologies</div>' +
          '<h1 style="margin:10px 0 0;font-size:28px;line-height:1.2;">New Website Inquiry</h1>' +
        '</div>' +
        '<div style="padding:28px;">' +
          '<p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4a607d;">A new contact form submission has been received from the website.</p>' +
          '<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fbff;border:1px solid #e1e9f3;font-weight:700;width:210px;">Company Name</td>' +
              '<td style="padding:12px 14px;border:1px solid #e1e9f3;">' + sanitize(data.companyName) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fbff;border:1px solid #e1e9f3;font-weight:700;">Your Name</td>' +
              '<td style="padding:12px 14px;border:1px solid #e1e9f3;">' + sanitize(data.senderName) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fbff;border:1px solid #e1e9f3;font-weight:700;">Email Address</td>' +
              '<td style="padding:12px 14px;border:1px solid #e1e9f3;"><a href="mailto:' + sanitize(data.email) + '" style="color:#0e4a8a;text-decoration:none;">' + sanitize(data.email) + '</a></td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fbff;border:1px solid #e1e9f3;font-weight:700;">Phone Number</td>' +
              '<td style="padding:12px 14px;border:1px solid #e1e9f3;">' + sanitize(data.phone) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fbff;border:1px solid #e1e9f3;font-weight:700;">Submitted At</td>' +
              '<td style="padding:12px 14px;border:1px solid #e1e9f3;">' + sanitize(data.submittedAt) + '</td>' +
            '</tr>' +
          '</table>' +
          '<div style="margin-bottom:24px;">' +
            '<div style="font-size:14px;font-weight:700;color:#0b3568;margin-bottom:10px;">Message / Product Requirement</div>' +
            '<div style="padding:16px 18px;background:#f8fbff;border:1px solid #e1e9f3;border-radius:12px;font-size:15px;line-height:1.8;color:#334e68;white-space:pre-wrap;">' + sanitize(data.message) + '</div>' +
          '</div>' +
          '<div style="font-size:13px;color:#6b7f98;">Page URL: <a href="' + sanitize(data.page) + '" style="color:#0e4a8a;text-decoration:none;">' + sanitize(data.page) + '</a></div>' +
        '</div>' +
      '</div>' +
    '</div>';

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    replyTo: data.email
  });

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitize(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
