# Module-2 - Budget Birdie

This project is my final submission for the Module 2 unit of my Web Development course at South Staffordshire College.

Links to GitHub profile and site: 

[GitHub profile page](https://github.com/Siaaancode/Module-2) 

[Budget Birdie app](https://siaaancode.github.io/Module-2/)

![Home-page image](/assets/images/home-page_image.png)

## Table of Contents
1. [Project information](#project-description)
2. [Strategy](#website-strategy)
3. [User Stories](#user-stories-user-research)
4. [Scope](#website-scope)
5. [Structure](#website-structure)
6. [Skeleton](#website-skeleton)
7. [Surface](#website-surface)
8. [Technologies used](#technologies-used) 
9. [Testing](#testing)
10. [Deployment](#deployment)

# Project Description

This web application has been developed to help users manage and better understand their personal finances. By entering details of their income and expenses, users can view automatically calculated totals alongside a clear breakdown of their financial information. The application provides a simple, intuitive, and organised way to monitor spending and income, enabling users to gain greater insight into their financial situation, develop healthier financial habits, and make more informed financial decisions.

# Website Strategy

The strategy for this project is to develop a user-friendly and intuitive financial management web application that enables users to better understand and monitor their personal finances. The application is primarily aimed at students and individuals who want to improve their financial management skills by providing a clear overview of their income and expenses.

Financial information is presented in a simple, organised, and easy-to-understand format, allowing users to quickly assess their financial position. By making key financial data more accessible, the application encourages users to develop better budgeting habits, make informed financial decisions, and work towards achieving their financial goals.

JavaScript is used to implement the application's core functionality, automatically processing user input to calculate income and expense totals in real time. This provides users with immediate feedback as they enter or update their financial information, creating a responsive and interactive user experience while reducing the likelihood of manual calculation errors.

## Project Goals
The main goals of this project:
 
 1. Build a fully functional web app that allows users to record, manage and store their incomes and expenses, while also automatically calculating the balances.

 2. Effectively use JavaScript to implement the logic required to handle the data processing, financial calculations, and updates within the application, ensuring that users receive accurate summeries and insights.
 
 3. Design an intuitive and accessible user interface focusing on simplicity, clean aesthetics and ease of use. Making it a super simple apllication for all to use.

## Target Audience

1. General users looking to improve their budgeting and saving habits
2. Students managing limited budgets

My main target audience will be general users, as the website will be designed for the inputs to be general life expenses and incomes as apose to business related ones. Given time, I could create a more elaborate option for the users to choose whether they are using this for personal or professional reasons.

## User Stories (User Research)

### Must-have

“As a student, I want to record my expenses and income in one place, so that I can track what money is coming in, and where money is being spent, so I can cut anything I deem pointless purchases. This would allow me to budget better.” Must-have

Feature: Income and expense tracker with calculated totals

“As a person wanting to see how my finances balance, it would be really helpful to have blank input spaces to add my own individual incomes and expenses. This would allow me to put niche names to each section that isn’t a “normal” income or expense.” Must-have

Feature: Ability to input own descriptions, amounts and select categories

"As a user who has a lot of incomes and expenses, the ability to add or remove input fields would be really useful for me, so I'm not limited to only a few input fields." Must-have

Feature: Additional input fields for incomes and expenses as well as ability to remove them

“As a person who wants to budget better, I want to see specifically where I’m wasting money, so that I can make reasonable cuts to my expenses and save money more responsibly.“ Must-have

Feature: Income and expense inputs categorised and grouped

### Should-have

“As someone trying to save, I want my input data to be saved, so I can access and edit it every month to see if I’m making progress on improving my savings.” Should-have

Feature: Local storage

"As someone who wants to understand their finances better, I want to be able to see my totals presented in a way that visually interesting, like a pie chart." Should-have

Feature: Interesting visuals for the data to be presented

### Could-have

“As a student, I want to receive budgeting advice based on my current spending habits, so that I can see where I may be wasting money and improve my financial literacy.” Could-have

Feature: Spending analysis and budgeting suggestions (Consider a limit on expenses considered “luxury”, ie: if “Takeaways” = luxury & is over x amount, add a message to the total page if over spent, suggesting “cut down on Takeaways”, etc.)

“As a student who’s struggling financially, I want to be able to easily calculate how much to save over a x month period, to guarantee I save enough for the next semester.” Could-have

Feature: Savings goal calculator (Total to save (£100) / x amount of months (10 months) = y amount per month (£10 per month))

## Research

For this project, I researched a few different web apps that were similar to what I'm trying to create. Through this research, I can begin to understand the key points I'll need to consider when developing my own web app. 

I've noted what was good, what was bad, what I could gain and what I'd improve. From this, I can make informed decisions about the directions I'd like to take with my own project.

## Websites

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

Each user story has been labelled as either a must-have, should-have, or could-have. The must-have requirements are considered essential and non-negotiable, as they are fundamental to the core purpose of the application. The should-have requirements are important features that add significant value and enhance the overall functionality of the system. The could-have requirements are optional features that would improve the application further but are not essential for meeting the main objectives of the project.

## Features

### Must-Have
- Accessibility and responsiveness across all devices
- Income and expense tracker with calculated totals
- Additional input slots for incomes and expenses
- Income and expense inputs categorised and grouped

### Should-Have
- Local storage
- Interesting visuals for the data to be presented (ie, pie chart)

### Could-Have
- Spending analysis and budgeting suggestions
- Savings goal calculator

## How user features support user stories:

Although web apps responsiveness has not been included in the user story section, it is a fundimental must for all projects. The application has been designed to provide a positive and accessible user experience for all users. Through responsive design and accessibility considerations, users will be able to access and use the website effectively across a range of devices and screen sizes. 

The use of local storage allows users to save their financial data for future use, eliminating the need to repeatedly enter the same information and improving convenience. 

The core feature of the application is its ability to automatically calculate income, expenses, and remaining balance, helping users track their finances more effectively. 

Additional input fields allow users to customise their financial records, providing greater flexibility and ensuring they are not restricted to predefined categories. 

Financial information is organised into income and expense categories, making it easier for users to understand and analyse their spending habits. 

Using engaging visuals, such as a pie chart, to display expense information helps users understand how their income is distributed across different spending categories, making the data easier to interpret. 

# Website Structure

The website will be structured to provide a clear and intuitive user experience. 

The homepage will introduce the purpose of the application and provide users with a helpful "How to use" guide, as well as having call-to-action buttons. From there, users will be able to navigate to a financial inputs sections, where they can enter their income and expenses data. Once the information has been submitted, JavaScript will automatically calculate totals and display a financial summary, including the user's remaining balance and a helpful doughnut chart to visualise their expenditures. 

The website will use a responsive layout to ensure all content remains accessible and easy to use across mobile, tablet, and desktop devices. Navigation and page elements will be kept simple and intuitive, as the website is focused on a small number of core features. 

By limiting the number of pages and reducing unnecessary complexity, users will be able to navigate the application more easily and remain focused on its primary purpose: managing their finances. This streamlined approach will improve usability, reduce confusion, and create a more efficient user experience.

## User Journey

When users first visit the homepage, they are presented with a navigation bar that provides quick access to all sections of the application. Below this, the hero banner introduces the application with a brief description and encourages users to begin managing their finances.

Users can either click the "How to Use" button or scroll down to access a dedicated section explaining how to use the application effectively. This guidance is intended to help new users understand the application's features before they begin. Once they are ready, they can select any of the available call-to-action buttons to navigate to the calculation page.

On the calculation page, users can immediately begin entering their financial information by providing a description, numerical amount, and category for each income or expense.

As data is entered, the application automatically performs the necessary calculations and updates the financial summary in real time. Separate totals are calculated for income and expenses, while a final balance is displayed by subtracting the total expenses from the total income. This provides users with an instant overview of their current financial position.

At the bottom of the page, users are presented with a doughnut chart that visually represents their expense data. The chart automatically updates as expenses are added, allowing users to easily compare spending across different categories and gain a clearer understanding of where their money is being spent.

# Website Skeleton

## Wireframes

These wireframes were created during the planning stages of my project, to establish a basic idea of the layout and generate ideas for the functions to include. They helped to visualise the placement of key information and features, as well as plans to keep an organised and clean interface. 

### Home page

The homepage was always going to be the easiest to maintain as the plan was to keep it simple, with a minimal layout to not take focus from the key features on the calculation page and avoid overwhelming users.

The navigation bar was designed with minimal links for easy, non-complicated navigation across the web application.

The hero banner was for a simple welcome and introduction of the application.

The "How to use" section was designed to provide a simple explanation for users to understand how to use the application.

Mulitple call-to-action buttons were added to improve navigation for users by giving them different ways to access the calculation page from any point on the home page.

![Navbar and hero banner](/assets/images/wireframes_home-page_navbar_and_hero-banner.png)

![How to use section](/assets/images/wireframes_home-page_how-to-section.png)

### Calculation page

The calculation page was where the wireframes plan changed the most. As the project was developing, new features were added and removed, that shifted the layout and purpose of the application. For example, in the wireframe image below, there was going to be a feature that allowed users to imput how frequently they received or paid a particular input.

The initial design of this page was going to be too simple, that I felt it wasn't going to meet the needs of users. By only simply having input fields for data and not having a section for the data to be calculated and presented to users, would have made for a bad user experience.

In the calculation page wireframe, I designed the layout for users to instantly see the areas they'd need to interact with. This would make it easier for users to understand what is needed from them and how the application works.

![Inputs](/assets/images/wireframes_calculation-page_inputs.png)

## Page layout and Interface elements

### Homepage

#### Navigation bar
![Navbar](/assets/images/navigation_bar.png)

I've kept the navigation bar very simple with a limited number of links, and use of the relevent colour palette and fonts to match the overall aesthetic of the website. Having the navigation bar positioned at the top follows the established web design conventions, meaning users instinctively know where to find it. This improves usability by making navigation more intuitive and enhancing the overall accessibility of the website.

The navbar links include 3 < a > tags:
- 1 home button (Budget Birdie)
- 1 instructions section (How to use)
- 1 link to the calculation page (Get started)

#### Hero Banner
![Hero banner](/assets/images/home-page_hero-banner.png)

The hero banner consists of a simple welcome message, and description of what users can expect to get from this application. As well as a call-to-action button, allowing another avenue for users to get to the main functionailty of the page.

#### Call-to-action buttons
![Call-to-action button](/assets/images/call-to-action_button.png)

My web application has three call-to-action buttons: one within the navigation bar, one on the homepage hero-banner and one at the bottom of the "How to use" section. 

I chose to provide multiple access points to the calculation page to improve usability and create a more intuitive user experience, allowing users to navigate to the main functionality from different areas of the website.

#### How to use section
![How to use section](/assets/images/home-page_how_to_section.png)

I created the “How to Use” section as a support feature for users who may need additional guidance when navigating the application. This provides a clear explanation of the app’s functionality and helps ensure users can confidently understand and use its features.

#### Footer
![Footer](/assets/images/footer_image.png)

The footer didn't need to hold any relevent information, so I kept it simple with just the web applications name, year it was created and a copyright logo.

### Calculation page

The calculation page essential consists of 3 section:

1. Hero banner
2. Incomes and expenses input fields section
3. Breakdown section

#### Hero Banner

![Hero banner](/assets/images/calculation-page_hero-banner.png)

The hero banner welcomes users to the calculation page with an encouraging introduction and a reminder to them, that the more financial information they enter, the more accurate and detailed their financial breakdown will be.

#### Input fields
 
![Income inputs](/assets/images/income-input_image.png)
![Expense inputs](/assets/images/expenses-input_image.png)

These sections allow users to freely enter and manage their financial information. Each entry includes a description field, an amount (£) field, and a category selector, enabling users to provide context and accurately classify each income or expense.

##### Additional input buttons

![Additional inputs button](/assets/images/additional-input_image.png)

This button allows users to add as many additional input fields as required. The page initially displays a single input row to keep the interface clean and uncluttered, ensuring users are only presented with additional fields when they need them.

##### Remove input buttons

![Remove input button](/assets/images/remove-input_button.png)

This button allows users to remove any of the input fields as required. On the load of the calculation page the first initial input doesn't have one of these, but once other fields have been created with the additional input button and page reloaded, one does appear for the first input field. (This is a bug) 

##### Income and expense total

![Income total](/assets/images/income-total_image.png)
![Expense total](/assets/images/expense-total_image.png)

These sections display the automatically calculated totals for both income and expenses. Providing these running totals allows users to monitor their financial information as they enter it, giving them a clear overview of their total income and expenditure before viewing their remaining balance.

#### Breakdown section

![Income - expenses total](/assets/images/breakdown-total_image.png)

The breakdown total section displays the automatically calculated remaining balance after expenses have been deducted from total income. This provides users with a clear and easy-to-understand overview of their current financial position.

![Legend](/assets/images/legend_image.png)

The legend was designed to help users easily identify the different sections of the doughnut chart. It uses colours that align with the website’s colour palette, alongside clear labels that correspond to each expense category, improving readability and making the data easier to interpret.

![Doughnut chart](/assets/images/doughnut-chart_image.png)

The doughnut chart was added as a feature to provide users with a visual representation of their expenses in an engaging and easy-to-understand format. Each section of the chart represents a different expense category and dynamically updates to display only categories that contain entered data, ensuring the visualisation remains relevant and accurate.

## Responsiveness

Responsive design is an essential industry standard, ensuring that users have a consistent experience across all device sizes. This web application was developed with accessibility as a key priority, following a mobile-first approach. The layout and interface were designed for smaller screens initially, before being progressively enhanced and adapted for larger devices.

Both pages of the application achieve a Lighthouse accessibility score of 100, demonstrating a strong commitment to inclusive design and adherence to recognised web accessibility best practices.

# Website Surface
## Design Choice

The design choices made throughout this project were intended to create a clean, modern, and professional aesthetic that aligns with the purpose of the web application. A consistent colour palette, typography, and spacing system were used to establish a strong visual identity while maintaining readability and ease of use. The interface was designed to minimise unnecessary visual clutter, allowing users to focus on the application's core functionality.

## Colour Palette

#373F51 - Charcoal Blue 

#8CBA80 - Muted Olive 

#F8F4F9 - Ghost White

I chose these colours for my project as they created a modern and professional feel for the website. I used the WebAIM colour contrast checker to make sure they contrasted well together. The Muted Olive (#8CBA80) and Ghost White (#F8F4F9) do not contrast well together, so I made sure not to put them together to avoid any legibility issues with users.

## Typography

For the typography I've chosen to use GoogleFont' Roboto Mono (https://fonts.google.com/specimen/Roboto+Mono?preview.layout=grid). I felt this was a good font to use, as it provides a professional look to the website. I used monospace as the secondary font, incase it fails to load.

# Technologies used

- HTML, Structure of the website.
- CSS, Styling and layout.
- Javascript, interactivity and calculations.
- Git, version control.
- GitHub, Code hosting and project management.
- W3C, Markup and CSS validator.
- JSLint, Javascript validator.
- DevTools, Inspect and Lighthouse.
- WebAIM, Colour contrast checker.
- Favic-o-matic, Favicon generator.
- GoogleFonts, Custom Fonts.
- localStorage API
- Chart.js, Pie chart integration

## Jest

Jest is a Javascript testing framework, used to test developers code to verify the code behaves as expected. I did not use Jest for the project as the Behaviour-driven development menthod was manageable for the scale of my project.

### Principles of Automated Testing and Manual Testing

Both methods of testing have their advantages and disadvantages, but ultimately ensured the code is reliable, functional and user-friendly.

#### Manual Testing

1. Human observation - Developers use their own judgement to identify bugs and unexpected behaviour.
2. Exploratory testing - Investigate the apllication freely to discover issues that scripted test may have missed.
3. User-focused - Testing the application from the perspective of the user, including the accessibility and how easy the application is to use and navigate.
4. Flexible - Test can be adapted as new issues appear.

##### Advantages

- Good for testing user experience and interface design.
- Good for exploratory testing.
- Good for identify visual or usability problems that automated testing misses.

##### Disadvantages

- Time consuming and repetitive.
- Human errors are more likely.
- Consistantly repeating on bigger projects.

#### Automated Testing

1. Repeatability - Can be ran consistantly, mulitple times.
2. Speed - Tests are executes much faster than manual testing.
3. Reliability - Gives consistant results, eliminating human error.
4. Regression testing - Ensures current functionality still works after code changes.
5. Continuous testing - Can be added into workflows, so tests run whenever code is updated.

##### Advantages

- Fast.
- No repetitve manual work.
- Perfect for regression, unit and integration testing.
- Improves code quality.

##### Disadvantages

- Time consuming to write and maintain.
- Cannot understand user experience or usability.

### Red, Green, Refactor

This method is the cycle of Test-Driven Developement (TDD). Red resembles code that does not work, Green code works and Refactor essentially cleans up the code, making it easier to manage and read.

For my project, I used Behaviour-Driven Development (BDD). From using this method, I have bypassed the Red stage to Green. If I was to Refactor my code, I would focus on improving maintainable, reusable and align with best practices:

#### addInputIncome() and addInputExpense()

1. Use HTML < template > element - This would allow me to define the structure of the additional income/expense rows within my HTML, then clone it with Javascript whenever a new row is required. This would keep my HTML and Javascript separate and avoid large innerHTML strings, as well as being easier to maintain and better for accessibility.

#### saveIncome() and saveExpense()

1. Combine event listeners - By combining the event listeners and adding an additional function as a handler, I could reduce duplicated code.

2. Create a reusable update function - saveIncome(), saveExpense(), incomeTotal() and expenseTotal() are repeated multiple times through out my code. By creating a reusable function, if I need to add another action at a later date, I would only need to change it in one place, not multiple places like my current code needs.

#### loadIncome() and loadExpense()

1. Duplicated HTML structure - The income/expense row HTML is repeated from the addInputIncome() and addInputExpense() functions, meaning if I was to change one, I'd have to change others as well, making it a tedious task to change.

2. Large innerHTML template - My current function is responsible for creating the entire UI structure, which makes the function harder to read and maintain.

3. Too many responsibilities - My current code puts a lot of responsibility in these functions, including: retrieving local storage data, parses JSON, clears the UI, creates DOM elements, generates IDs, handling category selection and adding new rows. This could be fixed by separating the responsibilities into different functions, which would follow the single responsibility principle, making each function easier to understand, maintain and test.

Overall, by applying the DRY (don't repeat yourself) and SRP (single responsibility principle) principles my code would be cleaner, more maintainable and easier to understand and test.

# API options

## Abilities of Cookies, localStorage and sessionStorage

Cookies 
- Capacity = 4kb
- Browsers = Both HTML 4 and HTML 5
- Accessible from = Any window
- Expiry = Manually set
- Location = Browser and server
- Sent with requests = Yes

localStorage 
- Capacity = 10mb
- Browsers = HTML 5
- Accessible from = Any window
- Expiry = Never
- Location = Browser only
- Sent with requests = No

sessionStorage 
- Capacity = 5mb
- Browsers = HTML 5
- Accessible from = Same tab
- Expiry = On tab close
- Location = Browser only
- Sent with requests = No

### localStorage API

I decided to go with the localStorage API, as it was the best option for storing the data inputted on my project. Its abilities work for my projects needs by:

1. Being accessible from any window. Meaning the information is available for any window inside the browser, not just 1 tab. 

2. It has the biggest amount of capacity. So there won't be any issues with the amount of data the user may need to input.

3. It runs on HTML 5, which most modern browsers use.

4. It never expires. The information logged on the local storage has no expiration, meaning it won't disappear unless the user deletes it. Example, users can close the tab and reopen it, and it will still be there. This removes the annoying task of having to re-enter their information if they accidentally close the tab.

Essentially, localStorage is persistant, data will remain after refreshing the page, closing the tab, closing the browser and restarting the computer.

- Youtube video that helped me understand the options available (https://www.youtube.com/watch?v=GihQAC1I39Q)
- Youtube video that helped me understand how to incorporate it (https://www.youtube.com/watch?v=Cb_fbi0JCJ8)

# Testing
## W3C Validators (HTML and CSS)

### index.HTML (passed) 
![index.HMTL](/assets/images/index.html_W3C_HTML_check.png)
### calculation-page.HTML (passed) 
![calculation-page.HTML](/assets/images/calculation-page.html_W3C_HTML_check.png)
### styles.css (passed) 
![styles.css](/assets/images/styles.ccs_W3C_CSS_check.png)

## DevTools
### Lighthouse

#### index.HTML (passed) 
![index.HTML](/assets/images/index.html_lighthouse_pass.png)

#### calculation-page (passed) 
![calculation-page.HTML](/assets/images/calculation-page.html_lighthouse_pass.png)

## JSLint (https://www.jslint.com/branch-v2020.11.6/index.html) - errors by function
(Selected options - Assume... a browser and Tolerate... long lines + for statement)

## script.js file

### addInputIncome() - No errors 
![addInputIncome()](/assets/images/JSLint_addInputIncome_function.png)

### addInputExpense() - No errors
![addInputExpense()](/assets/images/JSLint_addInputExpense_function.png)

### incomeTotal() - 1 error
![incomeTotal()](/assets/images/JSLint_incomeTotal_function.png)

JSLint failed this code:

    for (let i = 0; i < incomes.length; i++) {
        total += Number(incomes[i].value) || 0;
    }

So I change it to:

    let total = 0;
    let i;

    for (i = 0; i < incomes.length; i+=1) {
        total += Number(incomes[i].value) || 0;
    }

![incomeTotal()_Pass](/assets/images/JSLint_incomeTotal_function_pass.png)

The warning is only because I'm currently checking one function at a time and the error function is not being checked. A final screenshot of all functions being checked and passing will be available at the end of this section.

### expenseTotal() - 1 error
![expenseTotal()](/assets/images/JSLint_expenseTotal_function.png)

JSLint failed this code:

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += Number(expenses[i].value) || 0;
    }

So I change it to:


    let total = 0;
    let i;

    for (i = 0; i < expenses.length; i+=1) {
        total += Number(expenses[i].value) || 0;
    }
![expenseTotal()_Pass](/assets/images/JSLint_expenseTotal_function_pass.png)

The warning is only because I'm currently checking one function at a time and the error function is not being checked. A final screenshot of all functions being checked and passing will be available at the end of this section.

### breakdownOfTotals() - No errors
![breakdownOfTotals()](/assets/images/JSLint_breakdownOfTotals_function.png)

### saveIncome() - 1 error
![saveIncome()](/assets/images/JSLint_saveIncome_function.png)

JSLint failed this code:

    rows.forEach(row => {

So I change it to:

    rows.forEach(function (row) {

![saveIncome()](/assets/images/JSLint_saveIncome_function_pass.png)

### loadIncome() - 3 errors
![loadIncome()](/assets/images/JSLint_loadIncome_function.png)

JSLint failed this code:

    if (!saveData) return;

So I changed it to:
    
    if (!savedData) {
    return;
    }
![loadIncome()2](/assets/images/JSLint_loadIncome_function_2.png)

JSLint failed this code:

    incomes.forEach(item => {
    incomeIndex += 1;

So I changed it to:

    incomes.forEach(function (item) {
    let incomeIndex = 1;

![loadIncome()3](/assets/images/JSLint_loadIncome_function_3.png)

JSLint failed this code:

    <option value="" disabled selected>Categories</option>
            <option value="Employment" ${item.category === "Employment" ? "selected" : ""}>Employment income</option>
            <option value="Self-employment" ${item.category === "Self-employment" ? "selected" : ""}>Self-employment</option>
            <option value="Pension" ${item.category === "Pension" ? "selected" : ""}>Pension</option>
            <option value="State benefits" ${item.category === "State benefits" ? "selected" : ""}>State benefits</option>
            <option value="Other" ${item.category === "Other" ? "selected" : ""}>Other</option>

            document.addEventListener("DOMContentLoaded", () => {

So I changed it to:

    <option value="" disabled selected>Categories</option>
            <option value="Employment" ${(item.category === "Employment" ? "selected" : "")}>Employment income</option>
            <option value="Self-employment" ${(item.category === "Self-employment" ? "selected" : "")}>Self-employment</option>
            <option value="Pension" ${(item.category === "Pension" ? "selected" : "")}>Pension</option>
            <option value="State benefits" ${(item.category === "State benefits" ? "selected" : "")}>State benefits</option>
            <option value="Other" ${(item.category === "Other" ? "selected" : "")}>Other</option>
        </select>`;

        document.addEventListener("DOMContentLoaded", function  () {

![loadIncome()4](/assets/images/JSLint_loadIncome_function_4.png)

The warning is only because I'm currently checking one function at a time and the error function is not being checked. A final screenshot of all functions being checked and passing will be available at the end of this section.

### saveExpense() - 1 error
![saveExpense()](/assets/images/JSLint_saveExpense_function.png)

JSLint failed this code:

    rows.forEach(row => {

So I change it to:

    rows.forEach(function (row) {

![saveExpense()](/assets/images/JSLint_saveExpense_function_pass.png)

### loadExpense() - 3 errors

![loadExpense()](/assets/images/JSLint_loadExpense_function.png)

JSLint failed this code: 

    if (!saveData) return;

So I change it to:

    if (!savedData) {
    return;
    }

![loadExpense()2](/assets/images/JSLint_loadExpense_function_2.png)

JSLint failed this code:

    expenses.forEach(item => {
    expenseIndex += 1;

So I change it to:

    expenses.forEach(function (item) {
    let expenseIndex = 1;

![loadExpense()3](/assets/images/JSLint_loadExpense_function_3.png)

JSLint failed this code:

    <option value="" disabled selected>Categories</option>
            <option value="Housing" ${item.category === "Housing" ? "selected" : ""}>Rent / Mortgage</option>
            <option value="Council tax" ${item.category === "Council tax" ? "selected" : ""}>Council tax</option>
            <option value="Utilities" ${item.category === "Utilities" ? "selected" : ""}>Utilities</option>
            <option value="Food" ${item.category === "Food" ? "selected" : ""}>Food / Groceries</option>
            <option value="Transportation" ${item.category === "Transportation" ? "selected" : ""}>Transportation</option>
            <option value="Financial commitments" ${item.category === "Financial commitments" ? "selected" : ""}>Debt / Loan Payments</option>
            <option value="Entertainment" ${item.category === "Entertainment" ? "selected" : ""}>Entertainment</option>
            <option value="Other" ${item.category === "Other" ? "selected" : ""}>Other</option>
            
            document.addEventListener("DOMContentLoaded", () => {

So I change it to:

    <option value="" disabled selected>Categories</option>
            <option value="Housing" ${(item.category === "Housing" ? "selected" : "")}>Rent / Mortgage</option>
            <option value="Council tax" ${(item.category === "Council tax" ? "selected" : "")}>Council tax</option>
            <option value="Utilities" ${(item.category === "Utilities" ? "selected" : "")}>Utilities</option>
            <option value="Food" ${(item.category === "Food" ? "selected" : "")}>Food / Groceries</option>
            <option value="Transportation" ${(item.category === "Transportation" ? "selected" : "")}>Transportation</option>
            <option value="Financial commitments" ${(item.category === "Financial commitments" ? "selected" : "")}>Debt / Loan Payments</option>
            <option value="Entertainment" ${(item.category === "Entertainment" ? "selected" : "")}>Entertainment</option>
            <option value="Other" ${(item.category === "Other" ? "selected" : "")}>Other</option>

            document.addEventListener("DOMContentLoaded", function () {

![loadExpense()4](/assets/images/JSLint_loadExpense_function_4.png)

The warning is only because I'm currently checking one function at a time and the error function is not being checked. A final screenshot of all functions being checked and passing will be available at the end of this section.

### All functions

This was done after testing each function individually, to ensure no additional errors were missed.

![All functions](/assets/images/JSLint_all_functions.png)

JSLint failed this code:

    function breakdownOfTotals() {

    const incomeInput = document.getElementById("total-income-input");
    const expenseInput = document.getElementById("total-expense-input");
    const finalBreakdownTotal = document.getElementById("breakdown-total-input");

    const total = Number(incomeInput.value) - Number(expenseInput.value);

    finalBreakdownTotal.value = total;
    }

So I changed it by moving it above the incomeTotal() and expenseTotal() functions. JSLint saw this function as out of scope, but by moving it, JSLint accepted it.

![All functions](/assets/images/JSLint_all_functions_2.png)

The last error is regarding the updateChart() function that is not in that particular javascript file. So I've moved the updateChart and getExpenseCategoryTotals() function inbetween the expenseTotal() and saveIncome() functions, to avoid any 'out of scope' errors.

![All functions](/assets/images/JSLint_all_functions_3.png)

JSLint failed this code:

    expenses.forEach(item => {

So I changed it to:

    expenses.forEach(function (row) {

I also moved all the Chart javascript from the chart.js file to the script.js file. Before, the chart wasn't working with the code in the script.js file but now it magically does.

    const ctx = document.getElementById("my-chart");

    const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: ['Total'],
            backgroundColor: [
                '#373F51',
                '#535E79',
                '#6D7B9C',
                '#8691AC',
                '#8CBA80',
                '#ABCDA2',
                '#C3DBBD',
                '#DBE9D8'
            ],
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 5,
        }],
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: 'Roboto Mono, monospace',
                    },
                },
            },
        },
    },
    });

    function getExpenseCategoryTotals() {

    const expenses = document.querySelectorAll(".expense-row");

    const totals = {
        "Housing": 0,
        "Council tax": 0,
        "Utilities": 0,
        "Food": 0,
        "Transportation": 0,
        "Financial commitments": 0,
        "Entertainment": 0,
        "Other": 0
    };

    expenses.forEach(function (row) {

        const amount = Number(row.querySelector(".amount-number-expense").value) || 0;
        const category = row.querySelector(".categories-expense").value;

        if (totals[category] !== undefined) {
            totals[category] += amount;
        }
    });

    return totals;
    }

    function updateChart() {

    const totals = getExpenseCategoryTotals();

    myChart.data.datasets[0].data = [
        totals["Housing"],
        totals["Council tax"],
        totals["Utilities"],
        totals["Food"],
        totals["Transportation"],
        totals["Financial commitments"],
        totals["Entertainment"],
        totals["Other"]
    ];

    myChart.update();
    }

    document.addEventListener("input", (event) => {
    if (event.target.matches(".amount-number-expense")) {
        expenseTotal();
        updateChart();
    }
    });

    document.addEventListener("change", (event) => {
    if (event.target.matches(".categories-expense")) {
        saveExpense();
        expenseTotal();
        updateChart();
    }
    });

Because I moved it over to the main script.js file, it's now pointing out a bunch of errors as well.

![All functions](/assets/images/JSLint_all_functions_4.png)

JSLint failed this code:

    const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: ['Total'],
            backgroundColor: [
                '#373F51',
                '#535E79',
                '#6D7B9C',
                '#8691AC',
                '#8CBA80',
                '#ABCDA2',
                '#C3DBBD',
                '#DBE9D8'
            ],
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 5,
        }],
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: 'Roboto Mono, monospace',
                    },
                },
            },
        },
    },
    });

So I changed it to:

    const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets: [{
            label: ["Total"],
            backgroundColor: [
                "#373F51",
                "#535E79",
                "#6D7B9C",
                "#8691AC",
                "#8CBA80",
                "#ABCDA2",
                "#C3DBBD",
                "#DBE9D8"
            ],
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 5
    }]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: "Roboto Mono, monospace"
    }
                }
            }
        }
    }
    });

![All functions](/assets/images/JSLint_all_functions_5.png)

JSLint failed this code:

    const myChart = new Chart(ctx, {

So I change it by adding "/*global document, localStorage, Chart*/" at the beginning of the script.

JSLint failed this code:

    myChart.data.datasets[0].data = [
        totals["Housing"],
        totals["Council tax"],
        totals["Utilities"],
        totals["Food"],
        totals["Transportation"],
        totals["Financial commitments"],
        totals["Entertainment"],
        totals["Other"]
    ];

So I changed it to:

    myChart.data.datasets[0].data = [
        totals.Housing,
        totals.CouncilTax,
        totals.Utilities,
        totals.Food,
        totals.Transportation,
        totals.FinancialCommitments,
        totals.Entertainment,
        totals.Other
    ];

JSLint failed this code:

    document.addEventListener("input", (event) => {

    document.addEventListener("change", (event) => {

So I change it to:

    document.addEventListener("input", function (event) {

    document.addEventListener("change", function (event) {

![All functions](/assets/images/JSLint_all_functions_6.png)

JSLint failed this code:

    const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets: [{
            label: ["Total"],
            backgroundColor: [
                "#373F51",
                "#535E79",
                "#6D7B9C",
                "#8691AC",
                "#8CBA80",
                "#ABCDA2",
                "#C3DBBD",
                "#DBE9D8"
            ],
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 5,
        }]
    },

So I changed it by removing the ,:
    
    borderWidth: 5

![All functions](/assets/images/JSLint_all_functions_7.png)

JSLint failed this code:

    family: "Roboto Mono, monospace",
                    },
                },
            },
        },
    },
    });

So I changed it by removing the ,'s

    family: "Roboto Mono, monospace"
                    }
                }
            }
        }
    }
    });

![All functions](/assets/images/JSLint_all_functions_8.png)

JSLint failed this code:

    expenses.forEach(row => {

So I changed it to:

    expenses.forEach (function (row) {

![All functions](/assets/images/JSLint_all_functions_9.png)

JSLint failed the code because it didn't like that I wasn't calling saveExpense before the Chart functions. So I moved the saveExpense function before the Chart functions.

![All functions](/assets/images/JSLint_all_functions_10.png)

JSLint failed this code because of the space between forEach and (function:

    expenses.forEach (function (row) {

So I removed the space:

    expenses.forEach(function (row) {

JSLint failed this code:

    <option value="Employment" ${(item.category === "Employment" ? "selected" : "")}>Employment income</option>
            <option value="Self-employment" ${(item.category === "Self-employment" ? "selected" : "")}>Self-employment</option>
            <option value="Pension" ${(item.category === "Pension" ? "selected" : "")}>Pension</option>
            <option value="State benefits" ${(item.category === "State benefits" ? "selected" : "")}>State benefits</option>
            <option value="Other" ${(item.category === "Other" ? "selected" : "")}>Other</option>

So I changed it to:

    <option value="Employment" ${(
            item.category === "Employment"
            ? "selected"
            : ""
        )}>Employment income</option>
            <option value="Self-employment" ${(
            item.category === "Self-employment"
            ? "selected"
            : ""
        )}>Self-employment</option>
            <option value="Pension" ${(
            item.category === "Pension"
            ? "selected"
            : ""
        )}>Pension</option>
            <option value="State benefits" ${(
            item.category === "State benefits"
            ? "selected"
            : ""
        )}>State benefits</option>
            <option value="Other" ${(
            item.category === "Other"
            ? "selected"
            : ""
        )}>Other</option>

I also changed this for the expenses one as well.

JSLint failed this code:

    document.addEventListener("DOMContentLoaded", function() {

So I change it to:

    document.addEventListener("DOMContentLoaded", function () {

### All functions passed JSLint

![All function](/assets/images/JSLint_all_functions_11_pass.png)

### JSLint check after adding "Remove input buttons"

![All function](/assets/images/JSLint_all_functions_12.png)
![All functions](/assets/images/JSLint_all_functions_13_passed.png)

These errors were mainly missing spaces weird gaps (expected code at column 9, not 13, etc.)

![All functions](/assets/images/JSLint_all_functions_13_pass.png)

Above is this latest version of JSLint, tested after making a bunch of changes to the code to harden the localStorage, cleanly separate the chart code, replaced external CDN dependancy, etc.

## Testing User Stories

 1. “As a student, I want to record my expenses and income in one place, so that I can track what money is coming in, and where money is being spent, so I can cut anything I deem pointless purchases. This would allow me to budget better.” Feature: Income and expense tracker with calculated totals

### Tested Scenario - Expected Result

- Add input for income data, data is saved and displayed in income total section.
- Add additional income data, data is calculated together and displayed in income total section.
- Add input for expense data, data is saved and displayed in expense total section.
- Add additional expense data, data is calculated together and displayed in expense total section.
- Scroll down to breakdown section, previous income and expense total data is calculated together to produce a plus or minus total, (ie, £100 or -£100, etc.)

### Actual Result

The testing demonstrated that users were able to successfully record both income and expense entries, with totals being calculated and updated automatically. The actual results matched the expected outcomes for each test case, confirming that the feature functioned as intended. Overall, the feature met the acceptance criteria defined in the user story and fulfilled its intended functionality.

 2. “As a person wanting to see how my finances balance, it would be really helpful to have blank input spaces to add my own individual incomes and expenses. This would allow me to put niche names to each section that isn’t a “normal” income or expense.” Feature: Ability to input own descriptions, amounts and select categories

### Tested Scenario - Expected Result

- Add description into description field, description data is saved and displayed in field.
- Add amount into amount field, numeric data is saved and displayed in field.
- Add category into category field, category data is saved and displayed in field.

### Actual Result

The testing demonstrated that users were able to successfully enter their own description, numeric amount, and category to accurately record their financial data. The information was saved correctly and could be edited at any time, allowing users to update their records as needed. Overall, the feature functioned as intended and met the requirements of the user story.

 3. "As a user who has a lot of incomes and expenses, the ability to add or remove input fields would be really useful for me, so I'm not limited to only a few input fields." Feature: Additional input fields for incomes and expenses as well as ability to remove them

### Tested Scenario - Expected Result

- Click the 'Additional input' button, an additional input field loads.
- Click the 'Remove input' button, the input field above is removed.

### Actual Result

The testing demonstrated that users were able to freely add and remove input fields using the provided buttons. The feature supports an unlimited number of input fields, allowing users flexibility when entering data. However, adding a large number of inputs may impact page performance due to the increased amount of content being processed and displayed. The only thing that happened unexpectedly, was an additional delete button appearing under the original input field section after a page reload.

 4. “As a person who wants to budget better, I want to see specifically where I’m wasting money, so that I can make reasonable cuts to my expenses and save money more responsibly.“ Feature: Income and expense inputs categorised and grouped

### Tested Scenario - Expected Result

- Select the category, category saves on page in the input field.
- Category selected in expense transfers to the chart data.

### Actual Result

The testing demonstrated that users are able to successfully select the appropriate category that best represents their expense descriptions. It also confirmed that the selected expense categories are accurately processed and correctly displayed within both the doughnut chart and its accompanying legend, ensuring that users can clearly visualise their spending breakdown.

 5. “As someone trying to save, I want my input data to be saved, so I can access and edit it every month to see if I’m making progress on improving my savings.” Feature: Local storage

### Tested Scenario - Expected Result

- User inputs data into input fields, refreshes / closes web browser tab / restarts computer, data loads back.

### Actual Result

The testing demonstrated that after reloading the web page, all previously entered data was successfully saved and automatically restored without requiring any additional user actions. This confirms that the data persistence functionality works as intended, allowing users to continue managing their finances without losing their recorded information.

 6. "As someone who wants to understand their finances better, I want to be able to see my totals presented in a way that visually interesting, like a pie chart." Feature: Interesting visuals for the data to be presented

### Tested Scenario - Expected Result

- User inputs expenses data, scrolls to bottom of page to breakdown section.
- The doughnut chart automatically updates and displays the entered expense data information.
- The expense data is correctly grouped according to the selected categories.

### Actual Result

The testing demonstrated that expense categories are accurately represented within the doughnut chart and correctly correspond to the colours displayed in the legend. The chart successfully divides the data based on the values entered, providing users with a clear visual breakdown of their spending.

## Testing evaluation
## Final checks

W3C HTML validator - Passed
W3C CSS validator - Passed
DevTools Lighthouse - Passed
JSLint - Passed
Github Pages - Passed
Manual testing - Passed

## Test Checklist:
### User Journey: Adding income and expenses

- Open the application and navigate to the calculation page.
- Add an income entry with a description, amount and category.
- Confirm the income total updates correctly.
- Add an expense entry with a description, amount and category.
- Confirm the expense total updates correctly.
- Check that the remaining balance is calculated correctly.
- Confirm the expense chart updates to show the correct categories.
- Refresh the page and confirm income and expense data is retained.
- Remove an input row and confirm is it deleted successfully.
- Leave an input field empty and confirm validation prevents invalid data.

# Deployment - GitHub Pages

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

- Struggled to get the new input rows function (function addInputIncome() / function addInputExpense()) to save: These functions did not have a class linked to them so when I tried to save and load them they were'nt saving like the original input. I fixed this by adding (newRow.classList.add("income-row"); and newRow.classList.add("expense-row");) into the function.

- Both incomeTotal() and expenseTotal() functions weren't loading after save and load: By adding a function call for incomeTotal and expenseTotal after the loadIncome and loadExpense functions fixed this issue.

- id="category-selector" wasn't functioning properly: I was using an id instead of a class, which was causing the function to not work properly.

- Error for javascript on homepage: I mistakenly added a script tag linking the javascript file to the homepage html document. This was not needed, as there was no javascript used on the homepage, so I deleted that line of code.

- incomeTotal() and expenseTotal() didn't update when data inputted was changed, unless page is refreshed: The incomeTotal and expenseTotal functions weren't being called in the eventListener of the saveIncome and saveExpense functions. Simply added the code to call the incomeTotal and expenseTotal, in the eventListener of saveIncome and saveExpense function.

- Lighthouse performance for the calculation-page.HMTL was at 77: To resolve this performace issue, I remove the animation effect of the pie chart as this was too costly to the performace.

- Duplicate form field id's: My former javascript code simply duplicated my original HTML input fields, which contained id's that ended up being reused, which flagged issues on lighthouse. But I couldn't remove the id's on my HMTL as they were needed for the labels tags. To resolve this, I asked ChatGPT how I could resolve this in Javascript to create new id's in the new inputs. It suggested creating the initial input row in Javascript and have them load on the initial loading of the page, then having code that links to the add button to add inputs where it would generate new inputs with different ids, eg: inital input #income-description-1, #income-description-2, etc.

### Not Fixed

- Delete button appears under first input field when page is refreshed. I decided not to fix this bug, as I don't really see it as an issue at the moment. If I was to fix it, I'd try to remove it, as I wouldn't want the users to intentionally remove the original input field.

# Project Evaluation

Overall, this project successfully met its original objectives by allowing users to record their income and expenses, calculate their remaining balance, and visualise their spending through a doughnut chart. The application provides a simple, responsive, and user-friendly interface, with user data being stored in localStorage to ensure information persists between browser sessions.

I was disappointed that I wasn’t able to include the additional feature of spending analysis and budgeting. However, I felt that adding it at this stage may not have been the right decision, as it could have introduced unintended bias from my perspective.

## Final screenshots of finished website

### Mobile and smaller screens (under 768px)
#### Home page
![Home page](/assets/images/final_screenshots_home-page_1_mobile.png)
![Home page](/assets/images/final_screenshots_home-page_2_mobile.png)

#### Calculation page
![Calculation page](/assets/images/final_screenshots_calculation-page_1_mobile.png)
![Calculation page](/assets/images/final_screenshots_calculation-page_2_mobile.png)
![Calculation page](/assets/images/final_screenshots_calculation-page_3_mobile.png)

### Tablets and larger (992px and up)
#### Home page
![Home page](/assets/images/final_screenshots_home-page_1_tablet.png)

#### Calculation page
![Calculation page](/assets/images/final_screenshots_calculation-page_1_tablet.png)
![Calculation page](/assets/images/final_screenshots_calculation-page_2_tablet.png)

### Desktop and larger (1200px and up)
#### Home page
![Home page](/assets/images/final_screenshots_home-page_1_laptops.png)

#### Calculation page
![Calculation page](/assets/images/final_screenshots_calculation-page_1_laptops.png)
![Calcuation page](/assets/images/final_screenshots_calculation-page_2_laptops.png)

### Larger screens (1200px and up)
#### Home page
![Home page](/assets/images/final_screenshots_home-page_1_larger_laptops.png)

#### Calculation page
![Calculation page](/assets/images/final_screenshots_calculation-page_1_larger_laptops.png)
![Calculation page](/assets/images/final_screenshots_calculation-page_2_larger_laptops.png)

## Further improvements that could be made

Here is a list of further improvements I would make with extra knowledge and time. These improvement would add additional value to the users and improve the aesthetic of the web application:

1. Add a savings calculator. To avoid overcrowding the existing budgeting page, this feature would be placed on a separate page. The calculator could automatically use the user's remaining income balance from the budget calculator, allowing them to simply adjust how much they wish to save each month and the number of months they plan to save for. This would provide a more streamlined and user-friendly experience.

2. Redesign the layout of the calculation page. While the current functionality is effective, the overall layout could be improved to provide a cleaner and more visually appealing user experience. Some sections feel overcrowded, and the CSS styling could be refined to create a more consistent and modern design.

3. Refactor my Javascript code. Overall, I feel my code is very messy and chaoic. Refactoring it would make it more maintainable and easier to read, as well as reducing the amount of lines of code I have.

# Credits

## Content
- Some Text predictions, from VSCode
- Font, from GoogleFonts
- Icons, from FontAwesome

## Media 
- Error 404 page image, generated by ChatGPT
![Error 404 page image](/assets/images/error404_image.png)
- Favicon image, generate by ChatGPT (resized by me)

![Favicon](/assets/images/favicon_image_180x180.png)
![Favicon](/assets/images/favicon_image_32x32.png)
![Favicon](/assets/images/favicon_image_16x16.png)

## Code
### ChatGPT
- Used ChatGPT to hide label tags - 
Fix (modern, Lighthouse-safe version):

```
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

- Fixed duplicate ids issues when new inputs generated

Added suggested code (adjusted for both addInputIncome(), 
addInputExpense(), loadIncome() and loadExpense()):


    let incomeIndex = 1;

    incomeIndex += 1;

    const descId = `income-description-${incomeIndex}`;
    const amountId = `income-amount-${incomeIndex}`;
    const categoryId = `income-category-${incomeIndex}`;

    <label for="${descId}" ... >
    <input id="${descId}"... value="${item.description}">

    <label for="${amountId}" ... >
    <input id="${amountId}" ... value="${item.amount}">

    <label for="${categoryId}" ... >
    <select id="${categoryId}" ... >

- Add input validation and visible error message for empty or invalid rows

I added this code as my previous code didn't have any indicator for the users to see that a input was missing data. ChatGPT suggested using this code:

//HTML (calculation-page error message)
        
        <div class="input-error" role="alert"></div>

//Javascript (saveIncome() and saveExpense())
        
        let valid = true;
        if (validateExpenseRow(row)) {
        } else {
            valid = false;
        }
        if (!valid) {
        return;
        }

// Javascript (new functions to validate each row)
        function validateIncomeRow(row) {

        const description = row.querySelector(".income-description");
        const amount = row.querySelector(".amount-number-income");
        const category = row.querySelector(".categories-income");
        const errorMessage = row.querySelector(".input-error");

        errorMessage.textContent = "";

        if (description.value.trim() === "") {
            errorMessage.textContent = "Please enter an income description.";
        } else if (amount.value === "" || Number(amount.value) <= 0) {
            errorMessage.textContent = "Please enter a valid amount.";
        } else if (category.value === "") {
            errorMessage.textContent = "Please select an income category.";
        }

        if (errorMessage.textContent !== "") {
            errorMessage.classList.add("visible");
            return false;
        }

        errorMessage.classList.remove("visible");
        return true;
        }

- Harden localStorage/JSON.parse handling with try/catch fallback behaviour

My previous code did not have a defense for these breaking, which could cause my application to crash. So I used this code to avoid this happening.

The code below has been used to improve the saveIncome() and saveExpense() functions:

    try {
        localStorage.setItem("incomeData", JSON.stringify(incomes));
    } catch (error) {
        console.error("Unable to save income data:", error);
    }

The code below has been used to harden the loadIncome() and loadExpense() functions:

    let incomes = [];

    try {

    ......

    if (!Array.isArray(incomes)) {
        return;
    }

    } catch (error) {
        console.error("Unable to load income data:", error);
        return;
    }

What this does now:
- No saved data -> do nothing
- Invalid JSON -> ignores it
- Wrong format -> ignores it
- Valid data -> load normally