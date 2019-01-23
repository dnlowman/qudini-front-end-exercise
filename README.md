# Front-end Engineer Pair Programming Exercise

### Preface

At Qudini we utilise a range of front-end technologies which make up our stack. We're evolving our existing and greenfield applications to make use of a more modern set of technologies. We make use of React on both the web with React-DOM and on mobile devices using React-Native.

This exercise is intended to give you an idea into the technology stack we're currently using along with experiencing the domain we apply these technologies towards. This is not seen as a test and there are no right or wrong answers, we're open to your ideas and opinions in regards to how you feel the below problem could be best solved.

### The exercise

Within this repository you will find a project created with create-react-app, some of the features have been partially implemented however we would like you to revisit them and complete the implementation.

The new Queues screen feature should have the following capabilities:
- Ability to list the current customers within a Queue.
    - This has been partially implemented.
- Make a request to the Qudini API and display the list of customers along with their expected time.
    - A <Customer /> component was created by the previous engineer which you can use to render the content.
- Fetch the profile image of the customer using the Gravatar Image request API ( https://en.gravatar.com/site/implement/images).
- Ability to filter the list of returned customers using a text component above the list.
- Ability to refresh the list of customers every 30 seconds. 

We would like to see the following practised within the implementation:
- TDD / BDD
- Test coverage applied where needed.
- Some form of state management.
