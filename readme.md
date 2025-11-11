WebMobi QA Validation – Assignment Report

Candidate: Gautami Shetty

Date: 11 November 2025

Objective

Automate login and event creation validation for the WebMobi Events platform using Cursor AI with Playwright.

Environment

OS: Windows 10

Automation Tool: Cursor AI IDE

Framework: Playwright (JavaScript)

Tested URL: https://events.webmobi.com

Test Steps

Launch WebMobi Events portal.

Navigate to Login.

Authenticate using valid email and password credentials.

Wait for the AI Event Assistant to load.

Submit event request, e.g.,
“Networking dinner for 100 startup founders next month.”

Observe the response.

Expected Result

Login succeeds.

Event is created successfully and listed in the dashboard.

Actual Result

Login succeeds and AI assistant appears.

Event creation fails with error:

“Invalid or expired token”

Observation

The authentication token generated after login is not accepted by the event creation API.
Issue persists during both manual testing and automated Playwright runs.

Bug Report
Field	Description
Title	Event creation fails with “Invalid or expired token”
Severity	High
Reproducibility	100%
Environment	https://events.webmobi.com
 (Nov 2025)
Steps to Reproduce	
1. Sign in with email & password
2. Wait for AI Assistant
3. Enter any event description
Actual Result	Error: “Invalid or expired token”
Expected Result	Event should be created and displayed in event list

Impact	Prevents core event creation, blocking QA validation.
Evidence	Screenshot / console log attached
