# Code Challenge

This repository contains 3 challenges.

## Typescript

The first two are plain typescript challenges that you can find here:  
`src/app/challenge-1.ts`  
`src/app/challenge-2.ts`

## Angular

The third challenge involves developing a small user story. See this as an opportunity to show us your way of working, with the same quality as you would deliver on the job.

If you clone this repository, install the node_modules and run `npm run start`.
You can see the application on http://localhost:4200

There is an API that serves random cat images which you can use: https://aws.random.cat/meow

Acceptance criteria for the user story:

Scenario: Showing an image after clicking the button  
Given I am on the Code Challenge page  
When I click the "Click me!" button  
Then I should see a random image of a cat

Scenario: Hiding the image after 10 seconds  
Given I am on the Code Challenge page  
When I click the "Click me!" button  
And I wait for 10 seconds  
Then I should see no images

**Please don’t make solutions to the code challenge publicly available online.**

We would prefer to receive a link to a private repository or the project archived in an email.
