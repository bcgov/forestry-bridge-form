from django.core.mail import EmailMessage
import uuid
import base64

## sends an email
## TODO: enable adding of email attachments via an argument
def sendEmail(messageBody, subject, toEmail):
  msg = EmailMessage(subject, messageBody, toEmail)
  msg.send()


def getConfirmationMessageBody():
  return """
    Hello, 

    Attached below is a PDF of a Job Matching Form.

    Thank you
  """

def getConfirmationMessageSubject(trackingCode):
  return "Job Matching Form. Tracking Code: " + trackingCode

def generateCompressedTrackingCode():
  return base64.urlsafe_b64encode(uuid.uuid1().bytes).rstrip(b'=').decode('ascii').upper()

