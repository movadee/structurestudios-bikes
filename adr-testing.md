# Programming languages

## Summary

### Issue

We need to choose software testing tools for our project.

### Decision

We choose the follwoing tools for testing

| Testing technique   | Tools                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unit testing        | [Jest](https://jestjs.io/), [Spectator](https://ngneat.github.io/spectator/), [ng-mocks](https://ng-mocks.sudo.eu/)                                                                  |
| Integration and E2E | [Cypress](https://docs.cypress.io/)                                                                                                                                                  |
| Security            | [SonarCloud](https://www.sonarsource.com/products/sonarcloud/)                                                                                                                       |
| Accessibility       | [Axe](https://www.deque.com/axe/), [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/), [Pa11y](https://pa11y.org/), [Cypress](https://docs.cypress.io/)            |
| Static testing      | [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Dependabot](https://github.com/features/security/), [SonarCloud](https://www.sonarsource.com/products/sonarcloud/) |

### Status

Decided. We are open to new alternatives as they arise.

## Details

In order to be confident that our software is of a good quality we need to test it. There are different types and techniques of software testing that we use for this project.

- **Static Testing**
  Does not involve software execution and often implicit, like proofreading, plus when programming tools/text editors check source code structure or compilers (pre-compilers) check syntax.  
  :hammer_and_wrench: [ESLint](https://eslint.org/) catches inconsistent code formatting, styling, and possible errors  
  :hammer_and_wrench: [Prettier](https://prettier.io/) making code’s formatting more consistent; it only addresses style and formatting rules  
  :hammer_and_wrench: [SonarCloud](https://www.sonarsource.com/products/sonarcloud/) assesses codebase’s quality across a wide range of measures: reliability, security, maintainability, code coverage, and duplicate code.  
  :hammer_and_wrench: [Dependabot](https://github.com/features/security/) addresses security vulnerabilities from out-of-date dependencies.
- **Dynamic Testing**
  Testing of the dynamic behavior of code, executed with a given set of test cases.

  - **Functional Testing**
    Focuses on the business requirements of an application. Tend to answer the question of "can the user do this" or "does this particular feature work."

    - **Unit Test**
      Tests that verify the functionality of a specific section of code, usually at the function level.  
      :hammer_and_wrench: [Jest](https://jestjs.io/) testing framework  
      :hammer_and_wrench: [Spectator](https://ngneat.github.io/spectator/) that helps with all the boilerplate grunt work and allows to create tests faster and easier-to-maintain  
      :hammer_and_wrench: [ng-mocks](https://ng-mocks.sudo.eu/) helps with mocking services, components, directives, pipes and modules.
    - **Integration Test**
      Conducted to evaluate the compliance of a system or component with specified functional requirements. Individual software modules are combined and tested as a group.  
      :hammer_and_wrench: [Cypress](https://docs.cypress.io/guides/component-testing/quickstart-angular#Configuring-Component-Testing) provides a testable component workbench to quickly build and test components.
    - **E2E Test**
      Used to test whether the flow of a software from initial stage to final stage is behaving as expected. The purpose of end-to-end testing is to identify system dependencies and to make sure that the data integrity is maintained between various system components and systems.
    - **Acceptance Test**

  - **Non-Functional Testing** - **Performance Testing** - **Security Testing**
    Uncovers vulnerabilities, threats and risks in a software application.  
     :hammer_and_wrench: [SonarCloud](https://www.sonarqube.org/features/security/) In addition to exposing vulnerabilities, it is used to measure the source code quality including: Cross-site scripting, Denial of Service (DoS) attacks, HTTP response splitting, Memory corruption, SQL injection. - **Usability (UX) Testing**
    Measuring how easy and user-friendly a software application is. - **Accessibility Testing**
    Making your web and mobile apps usable to as many people as possible. It makes apps accessible to those with disabilities, such as vision impairment, hearing disabilities, and other physical or cognitive conditions.
    :hammer_and_wrench: [Axe](https://www.deque.com/axe/) (using [axe-core](https://github.com/dequelabs/axe-core) with cypress) is an accessibility testing engine for websites and other HTML-based user interfaces.  
     :hammer_and_wrench: [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) (using [cypress-audit](https://www.npmjs.com/package/cypress-audit)) automated Chrome DevTool for accessibility testing.  
     :hammer_and_wrench: [Pa11y](https://pa11y.org/) (using [cypress-audit](https://www.npmjs.com/package/cypress-audit)) tests web pages for accessibility. - **Internationalization & Localization (i18n) Testing** - **Compatibility Testing**
    ...

#### References

[Software Testing Wiki](https://en.wikipedia.org/wiki/Software_testing#Accessibility_testing)  
[Testing Components with Spectator](https://testing-angular.com/testing-components-with-spectator/#testing-components-with-spectator)  
[Testing Angular: A Guide to Robust Angular Applications](https://testing-angular.com/introduction/#introduction)  
[Cypress Component Testing in Nx](https://nx.dev/cypress/cypress-component-testing)  
[Nx support for Cypress 10](https://youtu.be/QDWN4C7T-Ck?t=320)  
[Web Performance Testing With Cypress and Google Lighthouse](https://www.lambdatest.com/blog/using-cypress-google-lighthouse-performance-testing/)  
[Why you should use open-source component libraries in your Design System](https://backlight.dev/mastery/why-you-should-use-open-source-component-libraries-in-your-design-system)  
[Angular Testing Overview: Unit, Integration & E2E Tests](https://onthecode.co.uk/blog/angular-testing-overview/)

Accessibility:

[Accessibility in Angular](https://angular.io/guide/accessibility)  
[Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/#authoring_testing)  
[How to Test Accessibility With Axe in Cypress](https://www.wearecogworks.com/blog/how-to-test-accessibility-with-axe-in-cypress/)  
[How to Automate Accessibility Tests with Cypress](https://www.freecodecamp.org/news/automating-accessibility-tests-with-cypress/)  
[How to test for accessibility with Cypress](https://www.deque.com/blog/how-to-test-for-accessibility-with-cypress/)  
[Build more accessible Angular apps](https://blog.angular.io/build-more-accessible-angular-apps-1aca4fc39aff)
