<h1>Example React / Typescript application</h1>

<h2>Table of contents</h2>
<ul>
    <li>Overview</li>
    <li>Tech stack</li>
    <li>Typescript features</li>
    <li>React features</li>
    <li>Project structure</li>
    <li>Installation</li>
    <li>Future improvements</li>
</ul>

<h3>Overview</h3>
<p>I have developed a responsive React and TypeScript CRUD application using a modular structure with reusable components and state management. Custom type alias', prop type alias', function parameter and event type checks ensure application wide type safety.</p>

<h3>Tech stack</h3>

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![BEM](https://img.shields.io/badge/BEM-000000?logo=buffer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)


<h3>Typescript features</h3>
<ul>
  <li><strong>Type alias - </strong><p>Created and maintained custom TypeScript type aliases using the type keyword</p></li>
  <li><strong>Data modelling - </strong><p>Defined a reusable Student data model to enforce consistent object structures throughout the application</p></li>
  <li><strong>Type imports - </strong><p>Imported types using TypeScript's import type syntax to separate type checking from runtime imports</p></li>
  <li><strong>Strongly typed - </strong><p>Applied strong typing to React state using generic types (useState<Student[]>)</p></li>
  <li><strong>Prop types - </strong><p>Defined custom prop type aliases within components</p></li>
  <li><strong>Parameter types - </strong><p>Typed function parameters to enforce the structure of the expected incoming arguments</p></li>
  <li><strong>Function returns - </strong><p>Explicitly declared function return types (void) for improved code clarity and type safety</p></li>
  <li><strong>Array types - </strong><p>Used array typing (Student[]) to ensure collections only contain valid student objects</p></li>
  <li><strong>Functions as props - </strong><p>Passed typed functions as props between parent and child components</p></li>
  <li><strong>Callback functions - </strong><p>Implemented type-safe callback functions for component communication</p></li>
  <li><strong>Type inference - </strong><p>Leveraged TypeScript's type inference for local component state objects</p></li>
  <li><strong>Intersection type - </strong><p>Combined custom component props with native HTML attributes using intersection types to extend built in HTML attributes in reusable components</p></li>
  <li><strong>Event type - </strong><p>Implemented type-safe event handling for user interaction using on change, on submit and on click events</p></li>
</ul>

<h3>React features</h3>
<ul>
  <li><strong>Architecture - </strong><p>Built a component-based application architecture</p></li>
  <li><strong>Hooks - </strong><p>Managed application data with state hooks</p></li>
  <li><strong>Controlled inputs - </strong><p>Implemented controlled form inputs using React state</p></li>
  <li><strong>Avoiding state mutation - </strong><p>Used state immutability patterns when updating arrays and objects</p></li>
  <li><strong>Spread operator - </strong><p>Added new records to state using the spread operator</p></li>
  <li><strong>Array methods - </strong><p>Removed records from state using the Array.filter() method and rendered dynamic data by using the .map() method (including using the react key when rendering collections)</p></li>
  <li><strong>Callback props - </strong><p>Used callback props to allow child components to trigger parent state updates</p></li>
  <li><strong>Reusable components - </strong><p>Built reusable form input and button components</p></li>
  <li><strong>Configurable components - </strong><p>Created components which can be configured depending on requirements by using prop driven design techniques</p></li>
  <li><strong>Form submissions - </strong><p>Implemented form submission handling with use of .preventDefault() method. Also managed resetting of form fields post submission</p></li>
  <li><strong>Accessibility - </strong><p>Colour contrast checked colours used on the project to ensure WCAG compliance and created fully accessible form fields by associating labels with their inputs.</p></li>
  <li><strong>Conditional classes - </strong><p>Use of conditional class rendering ensured responsive design with dynamic styling</p></li>
</ul>

<h3>Project structure</h3>
<p>The project structure highlights the architectural approach, folder organisation, and naming conventions that support a scalable and maintainable codebase.</p>
<div>
                <details>
                    <summary><strong>src</strong></summary>
                    <ul>
                        <li>
                            components
                            <ul>
                                <li>ButtonComponent.tsx</li>
                                <li>...</li>
                            </ul>
                        </li>
                        <li>
                            modules
                            <ul>
                                <li>_AddStudentForm.tsx</li>
                                <li>...</li>
                            </ul>
                        </li>
                        <li>
                            styles
                            <ul>
                                <li>
                                    components
                                    <ul>
                                        <li>_buttonComp.scss</li>
                                        <li>...</li>
                                    </ul>
                                </li>
                                <li>
                                    modules
                                    <ul>
                                        <li>_studentFormModule.scss</li>
                                        <li>...</li>
                                    </ul>    
                                </li>
                                <li>
                                    primitives
                                    <ul>
                                        <li>_breakpointVariables.scss</li>
                                        <li>...</li>
                                    </ul>
                                </li>
                                <li>
                                    semantics
                                    <ul>
                                        <li>colour/...</li>
                                        <li>spacing/...</li>
                                        <li>typography/...</li>
                                        <li>...</li>
                                    </ul>
                                </li>
                                <li>
                                    settings
                                    <ul>
                                        <li>_base.scss</li>
                                        <li>...</li>
                                    </ul>
                                </li>
                                <li>global.scss</li>
                            </ul>
                        </li>
                        <li>App.tsx</li>
                        <li>main.tsx</li>
                    </ul>
                </details>
            </div>

<h3>Set up & Installation</h3>
<p>To clone and start the project open a command line terminal and run the following commands in the order provided:</p>
<ol>
  <li>git clone https://github.com/NorthernWolf22/Example-react-ts-form.git</li>
  <li>cd example-react-ts-form</li>
  <li>npm install</li>
  <li>npm run dev</li>
</ol>

<h3>Future improvements</h3>
<ul>
  <li>Implement form validation and error handling</li>
  <li>Expand functionality to include editing of student profiles</li>
</ul>