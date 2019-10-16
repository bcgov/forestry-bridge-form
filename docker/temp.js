{
    "title": "Job Placement Office - Job Matching Form",
        "pages": [
            {
                "name": "Your Information",
                "elements": [
                    {
                        "type": "panel",
                        "name": "ApplicantPanel",
                        "elements": [
                            {
                                "type": "personname",
                                "name": "ApplicantName",
                                "title": "What is your full name?",
                                "description": "Use the name as it is written on your primary ID cards. This name will be the most useful.",
                                "isRequired": true,
                                "defaultSubstitution": "(Applicant Name)"
                            },
                            {
                                "type": "text",
                                "name": "ApplicantDOB",
                                "title": "What is your date of birth?",
                                "isRequired": true,
                                "inputType": "date"
                            },
                            {
                                "type": "address",
                                "name": "ApplicantAddress",
                                "title": "Address",
                                "isRequired": true,
                                "referLabel": "Applicant's Address"
                            },
                            {
                                "type": "contactinfo",
                                "name": "ApplicantContact",
                                "title": "Contact Information",
                                "isRequired": true,
                                "labelEmail": "Email",
                                "labelFax": "Fax(Optional)",
                                "labelPhone": "Phone Number"
                            },
                            {
                                "type": "checkbox",
                                "name": "ApplicantEducation",
                                "title": "Highest level of education ",
                                "isRequired": true,
                                "choices": [
                                    {
                                        "value": "Some high school",
                                        "text": "Some high school"
                                    },
                                    {
                                        "value": "Grade 12 or GED",
                                        "text": "Grade 12 or GED"
                                    },
                                    {
                                        "value": "Some post-secondary",
                                        "text": "Some post-secondary"
                                    },
                                    {
                                        "value": "Trades Qualification",
                                        "text": "Trades Qualification"
                                    },
                                    {
                                        "value": "Post-secondary diploma/degree",
                                        "text": "Post-secondary diploma/degree"
                                    },
                                    {
                                        "value": "Apprentice",
                                        "text": "Apprentice"
                                    }
                                ],
                                "colCount": 2
                            },
                            {
                                "type": "text",
                                "name": "Area:",
                                "visible": false,
                                "visibleIf": "{ApplicantEducation} contains \"item6\"",
                                "title": "Area:"
                            },
                            {
                                "type": "text",
                                "name": "Which trade(s)",
                                "visible": false,
                                "visibleIf": "{ApplicantEducation} contains \"item5\"",
                                "title": "Which trade(s)?"
                            },
                            {
                                "type": "multipletext",
                                "name": "Apprentice certification",
                                "visible": false,
                                "visibleIf": "{ApplicantEducation} contains \"item7\"",
                                "title": "Apprentince certification:",
                                "items": [
                                    {
                                        "name": "Trade:",
                                        "title": "Trade:"
                                    },
                                    {
                                        "name": "Trade:",
                                        "title": "Year:"
                                    }
                                ]
                            },
                            {
                                "type": "yesno",
                                "name": "AbleToRelocate",
                                "title": "Are you willing to relocate?",
                                "isRequired": true
                            },
                            {
                                "type": "text",
                                "name": "PreferredLocation",
                                "visible": false,
                                "visibleIf": "{AbleToRelocate} = \"y\"",
                                "title": "Preferred location:",
                                "requiredIf": "{AbleToRelocate} = \"y\""
                            },
                            {
                                "type": "yesno",
                                "name": "AbleToWorkCampJob",
                                "title": "Would you work in a Camp Job?",
                                "isRequired": true
                            }
                        ]
                    }
                ],
                "title": "Your Information"
            },
            {
                "name": "Your Experience",
                "elements": [
                    {
                        "type": "panel",
                        "name": "RespondentPanel",
                        "elements": [
                            {
                                "type": "text",
                                "name": "Employer",
                                "width": "50%",
                                "title": "Current/recent employer:",
                                "isRequired": true
                            },
                            {
                                "type": "text",
                                "name": "Exp(years)",
                                "width": "50%",
                                "title": "Years of forestry experience:",
                                "isRequired": true
                            },
                            {
                                "type": "checkbox",
                                "name": "Equiment(s)Trained",
                                "title": "Equipment trained or certified to operate (at current or previous operations)",
                                "isRequired": true,
                                "choices": [
                                    {
                                        "value": "ATL",
                                        "text": "ATL"
                                    },
                                    {
                                        "value": "Grader",
                                        "text": "Grader"
                                    },
                                    {
                                        "value": "Dozer",
                                        "text": "Dozer"
                                    },
                                    {
                                        "value": "Excavat",
                                        "text": "Excavat"
                                    },
                                    {
                                        "value": "Crane",
                                        "text": "Crane"
                                    },
                                    {
                                        "value": "Small Forklift",
                                        "text": "Small Forklift"
                                    },
                                    {
                                        "value": "Forklift Yard",
                                        "text": "Forklift Yard"
                                    },
                                    {
                                        "value": "Grapple Loader Log Yard",
                                        "text": "Grapple Loader Log Yard"
                                    },
                                    {
                                        "value": "Bucket Loader",
                                        "text": "Bucket Loader"
                                    },
                                    {
                                        "value": "Other",
                                        "text": "Other"
                                    },
                                    {
                                        "value": "None of the above",
                                        "text": "None of the above"
                                    }
                                ],
                                "colCount": 2
                            },
                            {
                                "type": "text",
                                "name": "Equiment(s)Trained",
                                "visible": false,
                                "visibleIf": "{Equiment(s)Trained} contains \"item10\"",
                                "title": "Other:"
                            },
                            {
                                "type": "checkbox",
                                "name": "Certifications",
                                "title": "Certifications or tickets that you hold",
                                "isRequired": true,
                                "choices": [
                                    {
                                        "value": "First Aid",
                                        "text": "First Aid"
                                    },
                                    {
                                        "value": "Welding",
                                        "text": "Welding"
                                    },
                                    {
                                        "value": "H2S Alive",
                                        "text": "H2S Alive"
                                    },
                                    {
                                        "value": "WHMIS",
                                        "text": "WHMIS"
                                    },
                                    {
                                        "value": "Confined Space Awareness",
                                        "text": "Confined Space Awareness"
                                    },
                                    {
                                        "value": "Chain Saw Safety",
                                        "text": "Chain Saw Safety"
                                    },
                                    {
                                        "value": "S-100 Basic Fire Suppression & Safety",
                                        "text": "S-100 Basic Fire Suppression & Safety"
                                    },
                                    {
                                        "value": "S-185 Fire Suppression & Safety",
                                        "text": "S-185 Fire Suppression & Safety"
                                    },
                                    {
                                        "value": "None of the above",
                                        "text": "None of the above"
                                    }
                                ],
                                "colCount": 2
                            },
                            {
                                "type": "text",
                                "name": "First Aid Level:",
                                "visibleIf": "{Certifications} contains \"item1\"",
                                "title": "First Aid Level",
                                "isRequired": true
                            },
                            {
                                "type": "text",
                                "name": "Welding Level",
                                "visibleIf": "{Certifications} contains \"item2\"",
                                "title": "Welding Level:",
                                "isRequired": true
                            },
                            {
                                "type": "checkbox",
                                "name": "ExperienceArea",
                                "title": "Experience in the following areas (at current or preivous operations):",
                                "isRequired": true,
                                "choices": [
                                    {
                                        "value": "Planner",
                                        "text": "Planner"
                                    },
                                    {
                                        "value": "Sawmill",
                                        "text": "Sawmill"
                                    },
                                    {
                                        "value": "Log Yard",
                                        "text": "Log Yard"
                                    },
                                    {
                                        "value": "Energy Plant",
                                        "text": "Energy Plant"
                                    },
                                    {
                                        "value": "Kilns",
                                        "text": "Kilns"
                                    },
                                    {
                                        "value": "None of the above",
                                        "text": "None of the above"
                                    }
                                ],
                                "colCount": 2
                            },
                            {
                                "type": "text",
                                "name": "Planner(Yrs)",
                                "visible": false,
                                "visibleIf": "{ExperienceArea} contains \"item1\"",
                                "title": "Planner: Number of Years",
                                "isRequired": true
                            },
                            {
                                "type": "text",
                                "name": "Sawmill(Yrs)",
                                "visible": false,
                                "visibleIf": "{ExperienceArea} contains \"item2\"",
                                "title": "Sawmill: Number of Years"
                            },
                            {
                                "type": "text",
                                "name": "Log Yard(Yrs)",
                                "visibleIf": "{ExperienceArea} contains \"item3\"",
                                "title": "Log Yard: Number of Years"
                            },
                            {
                                "type": "text",
                                "name": "Energy Plant(Yrs)",
                                "visible": false,
                                "visibleIf": "{ExperienceArea} contains \"item4\"",
                                "title": "Energy Plant: Number of Years"
                            },
                            {
                                "type": "text",
                                "name": "Kilns(Yrs)",
                                "visible": false,
                                "visibleIf": "{ExperienceArea} contains \"item5\"",
                                "title": "Kilns: Number of Years"
                            },
                            {
                                "type": "checkbox",
                                "name": "DrivingExp",
                                "title": "Driving training completed",
                                "isRequired": true,
                                "choices": [
                                    {
                                        "value": "Class 5",
                                        "text": "Class 5"
                                    },
                                    {
                                        "value": "Class 3",
                                        "text": "Class 3"
                                    },
                                    {
                                        "value": "Class 1",
                                        "text": "Class 1"
                                    },
                                    {
                                        "value": "Air Endorsement",
                                        "text": "Air Endorsement"
                                    },
                                    {
                                        "value": "Other",
                                        "text": "Other"
                                    },
                                    {
                                        "value": "None of the above",
                                        "text": "None of the above"
                                    }
                                ],
                                "colCount": 2
                            },
                            {
                                "type": "text",
                                "name": "Other driving training",
                                "visible": false,
                                "visibleIf": "{DrivingExp} contains [\"item5\"]",
                                "title": "Other driving training:",
                                "isRequired": true
                            },
                            {
                                "type": "checkbox",
                                "name": "SawmillTrained",
                                "title": "Sawmill/Planer - trained or certified to operate (at current of previous operations)",
                                "isRequired": true,
                                "choices": [
                                    {
                                        "value": "Lumber Stacker",
                                        "text": "Lumber Stacker"
                                    },
                                    {
                                        "value": "J Bar Operator",
                                        "text": "J Bar Operator"
                                    },
                                    {
                                        "value": "Chipper Operator",
                                        "text": "Chipper Operator"
                                    },
                                    {
                                        "value": "Paint Booth",
                                        "text": "Paint Booth"
                                    },
                                    {
                                        "value": "Edger Operator",
                                        "text": "Edger Operator"
                                    },
                                    {
                                        "value": "Chip car Attendant",
                                        "text": "Chip car Attendant"
                                    },
                                    {
                                        "value": "Tilt Host Feeder",
                                        "text": "Tilt Host Feeder"
                                    },
                                    {
                                        "value": "Barker Operator",
                                        "text": "Barker Operator"
                                    },
                                    {
                                        "value": "Logging Skidder",
                                        "text": "Logging Skidder"
                                    },
                                    {
                                        "value": "Planer Feeder",
                                        "text": "Planer Feeder"
                                    },
                                    {
                                        "value": "Clean Up",
                                        "text": "Clean Up"
                                    },
                                    {
                                        "value": "Log Processer",
                                        "text": "Log Processer"
                                    },
                                    {
                                        "value": "Lumber Grader/Trimmer",
                                        "text": "Lumber Grader/Trimmer"
                                    },
                                    {
                                        "value": "General Labour",
                                        "text": "General Labour"
                                    },
                                    {
                                        "value": "Head Rig Operator",
                                        "text": "Head Rig Operator"
                                    },
                                    {
                                        "value": "Other",
                                        "text": "Other"
                                    },
                                    {
                                        "value": "None of the above",
                                        "text": "None of the above"
                                    }
                                ],
                                "colCount": 3
                            },
                            {
                                "type": "text",
                                "name": "SawmillTrained",
                                "visible": false,
                                "visibleIf": "{SawmillTrained} contains [\"item16\"]",
                                "title": "Other training:",
                                "isRequired": true
                            },
                            {
                                "type": "checkbox",
                                "name": "Hobbies_Interests",
                                "title": "Do you have skills from your hobbies or interests that could be transferred to a new job or role, such as:",
                                "isRequired": true,
                                "choices": [
                                    {
                                        "value": "Plumbing",
                                        "text": "Plumbing"
                                    },
                                    {
                                        "value": "ELectrical",
                                        "text": "Electrical"
                                    },
                                    {
                                        "value": "Carpentry",
                                        "text": "Carpentry"
                                    },
                                    {
                                        "value": "Wood framing structures",
                                        "text": "Wood framing structures"
                                    },
                                    {
                                        "value": "Automotive repair",
                                        "text": "Automotive repair"
                                    },
                                    {
                                        "value": "Machinery repair",
                                        "text": "Machinery repair"
                                    },
                                    {
                                        "value": "Welding",
                                        "text": "Welding"
                                    },
                                    {
                                        "value": "Concrete",
                                        "text": "Concrete"
                                    },
                                    {
                                        "value": "Other",
                                        "text": "Other"
                                    },
                                    {
                                        "value": "None of the above",
                                        "text": "None of the above"
                                    }
                                ],
                                "colCount": 3
                            },
                            {
                                "type": "multipletext",
                                "name": "Other transferable skills",
                                "visible": false,
                                "visibleIf": "{Hobbies_Interests} contains [\"item9\"]",
                                "title": "Other transferable skills:",
                                "items": [
                                    {
                                        "name": "Other",
                                        "title": "Other:"
                                    },
                                    {
                                        "name": "Other",
                                        "title": "Other:"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "title": "Your experience"
            }
        ],
            "showQuestionNumbers": "off",
                "requiredText": ""
}