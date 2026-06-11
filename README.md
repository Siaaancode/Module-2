# Module-2 - Budget Birdie

This project is my final submission for the Module 2 unit of my Web Development course at South Staffordshire College.

Link to deployed site (add link here)

(Image of home page here)

## Table of Contents
1. [Project information](#project-description)
2. [Strategy](#website-strategy)
3. [Scope](#website-scope)
4. [Structure](#website-structure)
5. [Skeleton](#website-skeleton)
6. [Surface](#website-surface)
7. [Technologies used](#technologies-used) 
8. [Testing](#testing)
9. [Deployment](#deployment)

# Project Description

This app is being created to help users manage their finances more effectively through budgeting and saving. Based on a user's remaining income after expenses, the application will generate either a personalised budgeting plan or a savings plan with realistic goals and achievable outcomes. The app aims to provide a simple and organised way for users to track their financial situation, develop better financial habits, and make informed financial decisions.

# Website Strategy

The strategy for this project is to create a user-friendly, easy to use budgeting and savings web application that will help users achieve their financial goals. 

This app is being designed primarily for business owners, students, and individuals looking to improve their financial management. It will help users gain a clearer understanding of their finances by presenting information on income, expenses, and savings in a simple and easy-to-understand format. By providing personalised budgeting and savings guidance, the app aims to help users make more informed financial decisions and achieving their financial goals.

By using JavaScript to implement logic, the app will automatically calculate the user's financial information based on their numeric inputs. Depending on whether the calculated balance is positive or negative, the application will determine the most appropriate course of action. If the balance is positive, the app will generate a realistic savings plan with achievable goals. If the balance is negative, the app will identify areas of spending that could be reduced and provide budgeting recommendations to help improve the user's financial situation.

## Project Goals (Adjust)
The main goals of this project:
 
 1. Build a fully functional web app that records and stores incomes and expenses, automatically calculates the balances and provides budgeting or savings recommendations based on the total. 

 2. Effectively use JavaScript to implement the logic required to perform the financial calculations within the application.
 
 3. Create a simple to use web app, that focuses on a minimal design and clean aesthetics.


## Target Audience

1. Business owners tracking business finances
2. General users looking to improve their budgeting and saving habits
3. Students managing limited budgets

My main target audience will be general users, as the website will be designed for the inputs to be general life expenses and incomes as apose to business related ones. Given time, I could create a more elaborate option for the users to choose whether they are using this for personal or professional reasons.

## Research

For this project, I researched a few different web apps that were similar to what I'm trying to create. Through this research, I can begin to understand the key points I'll need to consider when developing my own web app. 

I've noted what was good, what was bad, what I could gain and what I'd improve. From this, I can make informed decisions about the directions I'd like to take with my own project.


## Websites (Adjust)

### Website 1 - Money Helper
https://www.moneyhelper.org.uk/en/everyday-money/budgeting/budget-planner

1. What’s good?

- Very in-depth
- Easy to use
- Free
- Offers a chart at the end to help the user break down their costs
- Can save results, download a spreadsheets and start again
- Colour contrasts well, creates a welcoming environment
- Offers a benefits and savings calculator as well
- Offers recommended reading after (Take control of your spending, save money on household bills, etc.)

2. What’s bad?

- Not much, overall it’s a good website

3. Features I could use?

- I like the simplicity of the input fields (name, amount, per month/week/year, etc.)
- Already has a majority of the standard incomes and expenses in-depth
- The use of a chart to break down the overall total at the end

4. What could be improved?

- The responsiveness of the website overall isn’t the best
- Maybe offer suggested inputs rather than having them all available at once, makes it a bit cluttered, although this does ensure nothing gets missed or forgotten.


### Website 2 - Money Saving Expert
https://www.moneysavingexpert.com/banking/budget-planning/ 

1. What’s good?

- Lots of advice and guidance on budgeting and saving
- Has a ‘Demotivator’ tool, essentially puts unessential spending into perspective. - Below I’ve added a screenshot of this, I used the example of a coffee, every working day, with the cost of the coffee and it calculated this outcome.
- Generally this website is the go to for financial literacy regarding information and tips
- Good responsiveness and colour contrast

2. What’s bad?

- Only offers a spreadsheet to fill out, doesn’t actually calculate on the website

3. Features I could use?

- I think the ‘demotivator’ is a really good tool to help users put into perspective the cost of their luxury purchases, questioning if they’re actually worth the cost

4. What could be improved?

- I would add the ability to actually calculate the total of income to expenses onto the website as appose to only offering a spreadsheet, it isn’t user friendly to those who only have a mobile device

### Website 3 - Starling Bank
https://www.starlingbank.com/current-account/tools/budget-planner/

1. What’s good?

- Clean design and explanation on how the budget planner works
- Is as in-depth as the Money Helper website but looks less cluttered
- Has an option for events (birthdays, Christmas, etc.) and the unpredictable (if you’re organised enough or able to set aside money for the unexpected)
- Result is automatically calculated on the same page
- Ability to save results, start over and edit
- Has a handy tool after results that can calculate how long it would take for users to save a defined amount if they save x amount monthly (image below)

2. What’s bad?

- Not much, its a super clean, easy to use website

3. Features I could use?

- Pretty much all the features labelled above. Some may be out of reach, but I like the idea of it all being on 1 page (It’s actually 2 pages after you submit but it still shows results on page 1)

4. What could be improved?

- I can’t think of anything I’d improve, overall a very good website


## Research Outcome

Through this research, I was able to build an understanding of what elements and features would be needed to best meet the needs of the users.

Top priorities for users:

1. Fully functional, including correct calculations, ability to create additional inputs for both incomes and expenses options, realistic suggestions for both budgeting and saving.
2. Ease of use and accessibility, including good responsiveness design, a quick input process and simple interface.
3. Ability to easily understand their financial situation, including easy-to-read results and a simple summery of information.

# Website Scope

For this project, I used an Agile development approach, using GitHub Projects to organise, prioritise, and track the development of the web application’s features.

By identifying and analysing user stories, I was able to define the features that users need, want, and may benefit from, ensuring the application is developed in line with user requirements and expectations.

## MVP (minimum viable product)

Below are the user stories created for this project. Each one has been labelled as either a must-have, should-have, or could-have. The must-have requirements are considered essential and non-negotiable, as they are fundamental to the core purpose of the application. The should-have requirements are important features that add significant value and enhance the overall functionality of the system. The could-have requirements are optional features that would improve the application further but are not essential for meeting the main objectives of the project.

## User Stories (User Research)

“As someone trying to save, I want my input data to be saved, so I can access and edit it every month to see if I’m making progress on improving my savings.” Should-have

Feature: Local storage

“As a student, I want to record my expenses and income in one place, so that I can track what money is coming in, and where money is being spent, so I can cut anything I deem pointless purchases. This would allow me to budget better.” Must-have

Feature: Income and expense tracker with calculated totals

“As a person wanting to see how my finances balance, it would be really helpful to have blank input spaces to add my own individual incomes and expenses. This would allow me to put niche names to each section that isn’t a “normal” income or expense.” Must-have

Feature: Additional input slots for incomes and expenses


“As a person who wants to budget better, I want to see specifically where I’m wasting money, so that I can make reasonable cuts to my expenses and save money more responsibly.“ Must-have

Feature: Income and expense inputs categorised and grouped


“As a student, I want to receive budgeting advice based on my current spending habits, so that I can see where I may be wasting money and improve my financial literacy.” Should-have

Feature: Spending analysis and budgeting suggestions (Consider a limit on expenses considered “luxury”, ie: if “Takeaways” = luxury & is over x amount, add a message to the total page if over spent, suggesting “cut down on Takeaways”, etc.)


“As a student who’s struggling financially, I want to be able to easily calculate how much to save over a x month period, to guarantee I save enough for the next semester.” Should-have

Feature: Savings goal calculator (Total to save (£100) / x amount of months (10 months) = y amount per month (£10 per month))

"As someone who wants to understand their finances better, I want to be able to see my totals presented in a way that visually interesting, like a pie chart." Could-have

Feature: Interesting visuals for the data to be presented


## Features

### Must-Have
- Accessibility and responsiveness across all devices
- Income and expense tracker with calculated totals
- Additional input slots for incomes and expenses
- Income and expense inputs categorised and grouped

### Should-Have
- Local storage
- Spending analysis and budgeting suggestions
- Savings goal calculator

### Could-Have
- Interesting visuals for the data to be presented (ie, pie chart)

## How user features support user stories:

The application has been designed to provide a positive and accessible user experience for all users. Through responsive design and accessibility considerations, users will be able to access and use the website effectively across a range of devices and screen sizes. 

The use of local storage allows users to save their financial data for future use, eliminating the need to repeatedly enter the same information and improving convenience. 

The core feature of the application is its ability to automatically calculate income, expenses, and remaining balance, helping users track their finances more effectively. Additional input fields allow users to customise their financial records, providing greater flexibility and ensuring they are not restricted to predefined categories. 

Financial information is organised into income and expense categories, making it easier for users to understand and analyse their spending habits. The application also provides personalised suggestions when users are overspending, helping to educate them on areas where they could reduce expenses. 

Finally, a savings goal calculator provides users with a realistic breakdown of how much they need to save each month to achieve their financial targets.

# Website Structure

The website will be structured to provide a clear and intuitive user experience. 

The homepage will introduce the purpose of the application and provide users with access to the main budgeting and savings tools. Users will be able to navigate to a financial input section where they can enter their income and expenses. Once the information has been submitted, JavaScript will automatically calculate totals and display a financial summary, including the user's remaining balance. Depending on the results, the application will present either budgeting recommendations or a personalised savings plan. 

A dedicated savings calculator section will allow users to set savings goals and determine how much they need to save each month to achieve them. The website will use a responsive layout to ensure all content remains accessible and easy to use across mobile, tablet, and desktop devices. Navigation and page elements will be kept simple and intuitive, as the website is focused on a small number of core features. 

By limiting the number of pages and reducing unnecessary complexity, users will be able to navigate the application more easily and remain focused on its primary purpose: managing their finances and achieving their budgeting or savings goals. This streamlined approach will improve usability, reduce confusion, and create a more efficient user experience.

## User Journey

### Navbar
### Hero Banner
### Call-to-action buttons
### Contact information (footer)
### Website sections


# Website Skeleton

## Page layout
## Interface elements
## Navigation
## Wireframes
## Home page

### Navbar and hero banner
### Our Team section
### Testimonials
### Contact information

## Services page
## Booking page

### Form
## Responsiveness

# Website Surface

## Design Choice

## Colour Palette

#373F51 - Charcoal Blue 

#8CBA80 - Muted Olive 

#F8F4F9 - Ghost White

I chose these colours for my project as they created a modern and professional feel for the website. I used the WebAIM colour contrast checker to make sure they contrasted well together. The Muted Olive (#8CBA80) and Ghost White (#F8F4F9) do not contrast well together, so I made sure not to put them together to avoid any legibility issues with users.

## Typography

For the typography I've chosen to use GoogleFont' Roboto Mono (https://fonts.google.com/specimen/Roboto+Mono?preview.layout=grid). I felt this was a good font to use, as it provides a professional look to the website. I used monospace as the secondary font, incase it fails to load.

## Images

# Technologies used

- HTML, Structure of the website.
- CSS, Styling and layout.
- Javascript, interactivity and calculations.
- Git, version control.
- GitHub, Code hosting and project management.
- W3C, Markup and CSS validator.
- DevTools, Inspect and Lighthouse.
- GoogleFonts, Custom Fonts.

# Testing

## W3C Validators (HTML and CSS)

## DevTools

## Lighthouse

## GitHub Pages

## Testing User Stories

## Final checks

W3C HTML validator - ...
W3C CSS validator - ...
DevTools Lighthouse - ...
Github Pages - ... 

## Testing evaluation

# Deployment

## How to run this project locally

- First, go to the GitHub Repository for https://github.com/Siaaancode/Module-2
- Click the deployments link, find the most recent deployment and click that, which will open a tab containing the deployed site.
- If a live deployment isn't available, you need to clone the repository to your own machine by typing "git clone" in the terminal, followed by the above link on a local IDE (Integrated Development Environment), such as VSCode.
- Open the project folder within the IDE, open the preview option on one of the HTML files in a browser.


## Steps to deploy this website

- Open GitHub, log in/sign up and create a repository.
- Open the terminal in the IDE and link it to your GitHub account. 
- Then copy the repository information from GitHub to the IDE. This will link them together. 
- Commit your project with commands through the terminal and push them.
- Go back to GitHub and click the settings button, then the pages option.
- Ensure the Source is set to 'Deploy from a branch' and Branch is set to 'main' and '/(root)'
- Once completed, a link at the top of that page will become available. Simply click it, and it will open a new tab of the deployed site. (https://github.com/Siaaancode/Module-2)


## Bugs Discovered

### Fixed

- CSS wouldn't load: Resolved by correcting the file path in the CSS file. I figured this one out by myself from previous experience having this issue. Originally the file path was "href="/assets/css/styles.css"". By removing the first "/" before assets resolved this issue.

- Turning icons into buttons: Struggled to figure out how to turn FontAwesome icons into buttons but resolved by following the instructions from W3schools.com (https://www.w3schools.com/howto/howto_css_icon_buttons.asp)

- Getting the breakdown function to work correctly: The first issue I had was actually getting the input to show a number at all. My mistake was trying to call the function outside of the actual function and naming the const' of the function the same as previous functions.

Example: function incomeTotal() {...} and const incomeTotal = document.getElementById("...");

The second issue was the value kept returning 0, this was because I was only calling the function after the function rather than in all the functions. This was causing the other functions to not update with changes to the inputs. 


### Not Fixed


# Project Evaluation

## Final screenshots of finished website

### Mobile and screen sizes (under 768px)
### Laptops and larger (992px and up)
### Desktop and larger (1200px and up)

## Further improvements that could be made

# Credits

## Content
## Media 
## Code
