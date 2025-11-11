WebMobi QA Validation Assignment

Candidate: Gautami Shetty
Date: November 2025

Objective

Automate login and event creation testing on the WebMobi Events Platform using Playwright within Cursor AI.
The goal is to validate authentication, event creation, and UI response handling.

Environment

Operating System: Windows 10

IDE: Cursor AI

Automation Framework: Playwright (JavaScript)

Browser: Chromium (non-headless)

Tested URL: https://events.webmobi.com

Test Steps

Launch the WebMobi Events website.

Navigate to the Login page.

Authenticate using valid email and password credentials.

Wait for the AI Event Assistant interface to appear.

Enter an event description, for example:

“Networking dinner for 100 startup founders next month.”

Observe system response and validate success or failure.

Expected Result

User should successfully log in.

The system should create a new event and confirm creation through a success message or listing.

Actual Result

Login succeeds and AI Assistant appears.

Event creation fails with an error message:

“Invalid or expired token”

Observation

This issue occurs even with valid login credentials, both in manual testing and automated execution.
The application fails to generate or validate a proper authentication token after login, resulting in a blocked event creation process.
Bug Report
Field	Description
Title	Event creation fails with “Invalid or expired token”
Severity	High
Reproducibility	100%
Environment	https://events.webmobi.com
 (Nov 2025)
Steps to Reproduce	
1. Log in using valid credentials
2. Wait for AI Assistant
3. Type an event description
Actual Result	Error message: “Invalid or expired token”
Expected Result	Event should be successfully created and displayed in event list
Impact	Prevents users from creating new events, blocking QA validation
Evidence	Screenshot / Video log of test run
Deliverables
test.js – Playwright automation script

README.md – Documentation and findings

Screenshot / Video – Evidence of observed issue

Conclusion

The WebMobi login functionality works correctly, confirming valid authentication flow. However, event creation consistently fails due to backend token validation issues. The automation test accurately identifies and documents this defect as part of the QA validation process.