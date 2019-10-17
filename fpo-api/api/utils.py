from django.core.mail import EmailMessage
import uuid
import base64

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

def getPDFFilename(trackingCode):
  # a better place for formatting a filename should be within a configuartion file like a 
  # pdf.config.json
  return "Job-Matching-" + trackingCode + '.pdf'