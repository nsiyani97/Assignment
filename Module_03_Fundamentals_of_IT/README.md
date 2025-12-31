# What is a Program?

- A program is a set of instructions written in a programming language to perform a specific task.
- These instructions tell the computer **what to do**, **how to do it**, and **in what order**.
- A program takes input, processes it using logic, and produces output.
- Programs are the foundation of all software applications.

---

## LAB EXERCISE

### Write a simple "Hello World" program in two different programming languages and compare them.

### 1. [Hello World in C](./Lab/hello_world_in_c.c)

### 2. [Hello World in JavaScript](./Lab/hello_world_js.html)

### Comparison of Structure and Syntax

- C is a **compiled language** and requires a main function and header files.
- JavaScript is an **interpreted language** and can execute statements directly.
- C uses strict syntax with semicolons and predefined structure.
- JavaScript has simpler syntax and is easier to write for beginners.
- Both programs achieve the same output but differ in structure and execution method.

---

## THEORY EXERCISE

### Explain in your own words what a program is and how it functions.

- A program is a logical set of instructions written to solve a problem or perform a task.
- It works by accepting input, processing the input using defined logic, and producing output.
- When a program runs, the computer executes each instruction step by step.
- Programs help automate tasks and make computers useful for real-world applications.

---

# What is Programming?

- Programming is the process of writing instructions that a computer can understand and execute.
- It involves using programming languages to solve problems and perform specific tasks.
- Programming enables humans to communicate logical steps to computers.
- It is the core activity behind software, applications, and systems.

---

## THEORY EXERCISE

### What are the key steps involved in the programming process?

- Programming is the process of designing, writing, testing, and maintaining instructions that a computer can execute.
- It involves understanding a problem and converting the solution into a language the computer understands.
- The process begins with **problem analysis**, where requirements and goals are clearly defined.
- Next is **algorithm design**, where step-by-step logic is planned.
- This is followed by **coding**, where the logic is written using a programming language.
- **Testing and debugging** are done to find and fix errors.
- Finally, **maintenance** is performed to improve or update the program over time.

---

# Types of Programming Languages

- Programming languages are formal languages used to write instructions for computers.
- They provide rules and syntax to communicate with hardware and software systems.
- Different languages are designed for different purposes and levels of control.

---

## THEORY EXERCISE

### What are the main differences between high-level and low-level programming languages?

- **High-level programming languages** are designed to be easy for humans to read, write, and understand.
- They use simple syntax and are closer to natural language.
- Examples include Java, Python, and JavaScript.
- High-level languages are portable and require compilers or interpreters.
- **Low-level programming languages** are closer to machine language and hardware.
- They provide more control over system resources like memory and processors.
- Examples include Assembly language and machine code.
- Low-level languages are faster but harder to learn and write.

---

# World Wide Web & How Internet Works

- The **World Wide Web (WWW)** is a system of interlinked web pages that are accessed through the internet using a browser.
- It works on the **client–server model**, where users request information and servers respond with data.
- The internet acts as the medium that connects clients and servers globally.
- Technologies like HTTP, DNS, and IP make web communication possible.

---

## LAB EXERCISE

### Diagram: How data is transmitted from a client to a server over the Internet

```
User
 │
 │  (1) Enters URL / Clicks Link
 ▼
Web Browser (Client)
 │
 │  (2) HTTP Request
 ▼
Internet
(DNS → Routers → ISP)
 │
 │  (3) Request reaches Server
 ▼
Web Server
 │
 │  (4) Server processes request
 │      (fetch file / database / logic)
 │
 │  (5) HTTP Response
 ▼
Internet
 │
 │  (6) Response sent back
 ▼
Web Browser
 │
 │  (7) Web page rendered
 ▼
User
```

### Explanation:

- The user makes a request through a browser.
- The browser sends an HTTP request over the internet.
- The server receives the request, processes it, and sends back a response.
- The browser receives the response and displays the webpage.

---

## THEORY EXERCISE

### Describe the roles of the client and server in web communication.

- The **client** is the user’s device or web browser that initiates requests.
- It requests web pages, images, or data from a server.
- The client is responsible for displaying the received content to the user.
- The **server** is a system that stores websites, applications, and databases.
- It listens for client requests and processes them.
- The server sends appropriate responses such as HTML pages or JSON data.
- This interaction enables smooth communication on the World Wide Web.

---

# Network Layers on Client and Server

- Network layers define how data is transmitted from one device to another over a network.
- Both client and server follow layered communication models to send and receive data correctly.
- Each layer has a specific responsibility, such as addressing, routing, or data delivery.
- The TCP/IP model is the foundation of internet communication.

---

## LAB EXERCISE

### Design a simple HTTP client–server communication (example)

[http client server program](./Lab/http_client_server.html)

### Explanation:

- The client sends an HTTP request to the server.
- The server receives the request, processes it, and sends back an HTTP response.
- The client requests data using HTTP.
- The request travels through network layers to the server.
- The server responds with requested data.
- The client receives and displays the response.

---

## THEORY EXERCISE

### Explain the function of the TCP/IP model and its layers.

- The **TCP/IP model** is a networking model used to explain how data travels over the internet.
- It divides communication into layers so that each layer performs a specific task.
- This layered approach makes network communication reliable and scalable.

### TCP/IP Layers

1. **Application Layer**

   - Provides services directly to users and applications.
   - Protocols like HTTP, FTP, SMTP work at this layer.
   - It prepares data for transmission.

2. **Transport Layer**

   - Ensures reliable data transfer between client and server.
   - TCP provides reliable, ordered delivery.
   - UDP provides faster but less reliable delivery.

3. **Internet Layer**

   - Handles logical addressing and routing.
   - Uses IP addresses to identify devices.
   - Determines the best path for data packets.

4. **Network Access Layer**

   - Deals with physical transmission of data.
   - Converts data into signals over cables or wireless media.
   - Includes Ethernet and Wi-Fi technologies.

- Together, these layers ensure data is sent, routed, received, and delivered correctly between client and server.

---

# Client and Servers

- A **client** is a device or application that requests services or data.
- A **server** is a system that provides services, resources, or data to clients.
- Client–server architecture is the basic model used for web and network communication.
- This model allows multiple clients to communicate with centralized servers.

---

## THEORY EXERCISE

### Explain Client–Server Communication

- Client–server communication is a process where a client sends a request to a server.
- The request is usually sent using a protocol such as HTTP.
- The server receives the request, processes it, and prepares the required response.
- After processing, the server sends a response back to the client.
- The client receives the response and displays the data to the user.
- This communication happens continuously whenever a user interacts with a website or application.

---

# Types of Internet Connections

- Internet connections are technologies that allow devices to connect to the internet.
- Different types of connections vary in speed, reliability, cost, and availability.
- Choosing the right connection depends on usage needs such as browsing, streaming, or business work.

---

## LAB EXERCISE

### Research different types of internet connections and list their pros and cons.

### 1. Broadband (DSL / Cable)

**Pros**

- Widely available in cities and towns.
- Affordable compared to newer technologies.
- Suitable for daily browsing and streaming.

**Cons**

- Speed decreases with distance or network congestion.
- Slower than fiber-optic connections.
- Performance may vary during peak hours.

---

### 2. Fiber-Optic Internet

**Pros**

- Extremely high speed and low latency.
- Very reliable and stable connection.
- Best for streaming, gaming, and business use.

**Cons**

- Limited availability in rural areas.
- Installation cost can be high.
- Requires fiber infrastructure.

---

### 3. Satellite Internet

**Pros**

- Available in remote and rural locations.
- Does not require cable or fiber infrastructure.
- Useful where other connections are not possible.

**Cons**

- High latency due to long-distance signal travel.
- Affected by weather conditions.
- Usually more expensive with data limits.

---

### 4. Mobile Internet (4G/5G)

**Pros**

- Portable and easy to use.
- Fast speeds with modern 4G/5G networks.
- No physical installation required.

**Cons**

- Speed depends on signal strength.
- Limited data plans.
- Network congestion can affect performance.

---

## THEORY EXERCISE

### How does broadband differ from fiber-optic internet?

- **Broadband internet** uses copper cables such as DSL or coaxial cables.
- Its speed is moderate and can reduce with distance and user load.
- Broadband is widely available and more affordable.
- **Fiber-optic internet** uses light signals through fiber cables.
- It provides much higher speed and better reliability.
- Fiber internet is faster, more stable, and suitable for heavy data usage.
- However, fiber has limited availability and higher setup costs.

---

# Protocols

- Protocols are a set of rules that define how data is transmitted and received over a network.
- They ensure proper communication between devices on the internet.
- Protocols specify data format, transmission method, and error handling.
- Common internet protocols include HTTP, HTTPS, FTP, TCP, and IP.

---

## LAB EXERCISE

### Simulate HTTP and FTP requests using command-line tools (curl)

### HTTP Request Simulation

```bash
curl http://example.com
```

- This command sends an HTTP request to a web server.
- The server responds with webpage data such as HTML.
- It simulates how a browser requests a web page.

---

### FTP Request Simulation

```bash
curl ftp://ftp.example.com
```

- This command sends an FTP request to an FTP server.
- It is used to access or transfer files.
- FTP is mainly used for uploading and downloading files.

---

## THEORY EXERCISE

### What are the differences between HTTP and HTTPS protocols?

- **HTTP (HyperText Transfer Protocol)** transfers data in plain text.
- Data sent over HTTP is not encrypted and can be intercepted.
- It is less secure and mainly used for non-sensitive information.
- **HTTPS (HyperText Transfer Protocol Secure)** is the secure version of HTTP.
- It uses SSL/TLS encryption to protect data during transmission.
- HTTPS ensures data confidentiality, integrity, and authentication.
- It is recommended for websites handling sensitive data like passwords and payments.

---

# Application Security

- Application security refers to practices and measures used to protect software applications from threats and attacks.
- It ensures data confidentiality, integrity, and availability.
- Application security is important to prevent unauthorized access, data breaches, and system damage.

---

## LAB EXERCISE

### Identify and explain three common application security vulnerabilities. Suggest possible solutions.

### 1. SQL Injection

- Occurs when malicious SQL queries are inserted through user input.
- Attackers can access or manipulate database data.
- **Solution:** Use prepared statements, parameterized queries, and input validation.

### 2. Cross-Site Scripting (XSS)

- Happens when malicious scripts are injected into web pages.
- It can steal user data like cookies and session information.
- **Solution:** Validate and sanitize user input and escape output properly.

### 3. Weak Authentication

- Caused by poor password policies or lack of authentication checks.
- Allows attackers to gain unauthorized access.
- **Solution:** Use strong passwords, multi-factor authentication, and secure login mechanisms.

---

## THEORY EXERCISE

### What is the role of encryption in securing applications? Software applications and its types.

- Encryption is the process of converting data into an unreadable format to protect it from unauthorized access.
- It ensures that sensitive data remains secure during storage and transmission.
- Encryption protects user information such as passwords, financial data, and personal details.
- It plays a vital role in securing applications against data theft and cyber attacks.

**Types of Encryption:**

- **Symmetric Encryption:** Uses the same key for encryption and decryption.
- **Asymmetric Encryption:** Uses a public key for encryption and a private key for decryption.
- **Hashing:** Converts data into a fixed-length value for secure password storage.

---

## LAB EXERCISE

### Identify and classify 5 applications you use daily as system software or application software.

| Application Name | Type of Software     |
| ---------------- | -------------------- |
| Windows OS       | System Software      |
| Android OS       | System Software      |
| Google Chrome    | Application Software |
| Microsoft Word   | Application Software |
| WhatsApp         | Application Software |

---

## THEORY EXERCISE

### What is the difference between system software and application software?

- **System software** manages computer hardware and provides a platform for running applications.
- It controls system operations like memory management and process handling.
- Examples include operating systems and device drivers.
- **Application software** is designed to perform specific user tasks.
- It runs on top of system software.
- Examples include word processors, browsers, and media players.

---

# Software Architecture

- Software architecture is the high-level structure of a software system.
- It defines how different components are organized and how they interact.
- A good architecture improves scalability, maintainability, and performance.
- It acts as a blueprint for both development and future expansion.

---

## LAB EXERCISE

### Design a basic three-tier software architecture diagram for a web application

```
User
 │
 ▼
Presentation Layer
(Web Browser / UI)
 │
 │  User requests & responses
 ▼
Business Logic Layer
(Application Server)
 │
 │  Data processing & rules
 ▼
Data Access Layer
(Database Server)
 │
 ▼
Database
```

### Explanation:

- The presentation layer interacts with the user.
- The business logic layer processes requests and applies rules.
- The data access layer communicates with the database to store or retrieve data.

---

## THEORY EXERCISE

### What is the significance of modularity in software architecture?

- Modularity means dividing a software system into smaller, independent modules.
- Each module performs a specific function within the system.
- It makes the system easier to understand, develop, and maintain.
- Changes in one module do not heavily affect other modules.
- Modularity also supports teamwork and code reusability.

---

# Layers in Software Architecture

- Layers in software architecture represent different levels of responsibility in a system.
- Each layer performs a specific role and communicates with adjacent layers.
- Layered architecture helps separate concerns and organize code logically.

---

## LAB EXERCISE

### Case study: Functionality of layers in an Online Shopping System

**1. Presentation Layer**

- Displays the user interface such as product lists, login pages, and checkout screens.
- Accepts user inputs like search, add to cart, and order placement.
- Sends user actions to the business logic layer.

**2. Business Logic Layer**

- Processes application rules such as price calculation, discounts, and order validation.
- Handles user authentication and authorization logic.
- Decides how data should be processed before storing or displaying it.

**3. Data Access Layer**

- Communicates directly with the database.
- Stores user details, product data, and order information.
- Retrieves data requested by the business logic layer.

---

## THEORY EXERCISE

### Why are layers important in software architecture?

- Layers separate responsibilities within a system.
- They make the application easier to maintain and debug.
- Layers improve scalability by allowing individual parts to be upgraded.
- They support reusability and cleaner code organization.
- Layered architecture makes large systems easier to manage and understand.

---

# Software Environments

- Software environments are controlled setups where software is developed, tested, and deployed.
- Each environment serves a specific purpose in the software development lifecycle.
- Using separate environments helps reduce errors and improves software quality.

---

## LAB EXERCISE

### Explore different types of software environments

### 1. Development Environment

- Used by developers to write and modify code.
- Contains development tools, debuggers, and local servers.
- Changes are frequent and errors are expected.

### 2. Testing Environment

- Used to test the application before release.
- Helps identify bugs, performance issues, and security flaws.
- Mimics the production environment as closely as possible.

### 3. Production Environment

- The live environment where end users access the application.
- Must be stable, secure, and optimized.
- Only tested and approved code is deployed here.

---

### Basic Environment Setup in a Virtual Machine (Conceptual)

- Install a virtual machine tool such as VirtualBox or VMware.
- Create a virtual machine and install an operating system.
- Set up required software tools and dependencies.
- Use this environment to simulate development or testing safely.

---

## THEORY EXERCISE

### Explain the importance of a development environment in software production.

- A development environment provides a safe space to write and test code.
- It allows developers to experiment without affecting live users.
- Bugs and errors can be detected early in the development phase.
- It improves collaboration among developers by maintaining consistency.
- A proper development environment ensures higher software quality before deployment.

---

# Source Code

- Source code is the human-readable instructions written by programmers using programming languages.
- It represents the original form of a program before it is converted into machine-executable code.
- Source code is edited, maintained, and versioned during software development.

---

## LAB EXERCISE

### Write and upload your first source code file to GitHub

- Create a simple source code file using any programming language.
- Save the file with the appropriate extension (for example `.js`, `.py`, `.java`).
- Create a new repository on GitHub.
- Upload the source code file to the repository.
- This confirms successful creation and storage of source code on GitHub.

---

## THEORY EXERCISE

### What is the difference between source code and machine code?

- **Source code** is written in high-level programming languages that humans can read and understand.
- It contains logic, variables, and comments for clarity.
- **Machine code** is a low-level binary code (0s and 1s) that the computer processor can execute directly.
- Source code must be compiled or interpreted to convert it into machine code.
- Humans cannot easily read or modify machine code.

---

# GitHub and Introductions

- GitHub is a cloud-based platform used to host and manage code repositories.
- It uses Git, a version control system, to track changes in source code.
- GitHub supports collaboration, version tracking, and project management.

---

## LAB EXERCISE

### Create a GitHub repository and document how to commit and push code changes

- Create a new repository on GitHub.
- Initialize the repository with a README file.
- Add your source code files to the repository.
- Commit changes to save a snapshot of your work.
- Push the committed changes to GitHub so they are stored online.

---

## THEORY EXERCISE

### Why is version control important in software development?

- Version control tracks changes made to source code over time.
- It allows developers to revert to previous versions if errors occur.
- Multiple developers can work on the same project without conflicts.
- It improves collaboration and accountability.
- Version control ensures safe, organized, and efficient software development.

---

# Student Account in GitHub

- A GitHub student account is a special account provided to students for learning and collaboration.
- It allows students to access repositories, tools, and educational resources.
- GitHub helps students practice real-world version control and teamwork.

---

## LAB EXERCISE

### Create a student account on GitHub and collaborate on a small project with a classmate

- Sign up for a GitHub account using a student email ID.
- Apply for GitHub Student benefits if available.
- Create or join a repository shared with a classmate.
- Collaborate by contributing code, committing changes, and reviewing updates.
- This exercise helps understand teamwork and version control practices.

---

## THEORY EXERCISE

### What are the benefits of using GitHub for students?

- GitHub helps students learn version control and real-world development workflows.
- It allows collaboration with classmates on shared projects.
- Students can build a public portfolio of their work.
- GitHub improves coding discipline through commits and documentation.
- It prepares students for professional software development environments.

---

# Types of Software

- Software is a set of programs that instruct a computer to perform tasks.
- Different types of software are designed for different purposes.
- Software can be classified based on its function and usage.

---

## LAB EXERCISE

### List of software used regularly and their classification

| Software Name      | Type of Software     |
| ------------------ | -------------------- |
| Windows OS         | System Software      |
| Android OS         | System Software      |
| Google Chrome      | Application Software |
| Microsoft Word     | Application Software |
| Antivirus Software | Utility Software     |

---

## THEORY EXERCISE

### What are the differences between open-source and proprietary software?

- **Open-source software** allows users to view, modify, and distribute the source code.
- It is usually free and supported by a community of developers.
- Examples include Linux and Firefox.
- **Proprietary software** has restricted access to source code.
- It is owned by a company and usually requires a paid license.
- Examples include Windows and Microsoft Office.
- Open-source promotes flexibility, while proprietary software offers official support and control.

---

# GIT and GITHUB Training

- Git is a distributed version control system used to track changes in source code.
- GitHub is a cloud-based platform that hosts Git repositories and supports collaboration.
- Together, Git and GitHub help teams manage code efficiently and work together smoothly.

---

## LAB EXERCISE

### Follow a GIT tutorial to practice cloning, branching, and merging repositories

- **Cloning** is the process of creating a local copy of an existing repository from GitHub.
- **Branching** allows developers to work on new features or fixes without affecting the main codebase.
- **Merging** is the process of combining changes from one branch into another.
- Practicing these steps helps understand parallel development and safe code integration.
- This exercise builds confidence in handling real-world collaborative projects.

---

## THEORY EXERCISE

### How does GIT improve collaboration in a software development team?

- Git allows multiple developers to work on the same project simultaneously.
- Each developer can work independently without overwriting others’ work.
- Git keeps a complete history of changes, making it easy to track who changed what and when.
- Branching and merging help manage features and bug fixes efficiently.
- Git improves teamwork, accountability, and code quality in development teams.

---

# Application Software

- Application software is designed to perform specific tasks for users.
- It runs on top of system software and helps users complete daily activities.
- Application software improves productivity and simplifies complex tasks.

---

## LAB EXERCISE

### Report: Types of application software and how they improve productivity

- **Word Processing Software** helps create and edit documents quickly and efficiently.
- **Spreadsheet Software** is used for calculations, data analysis, and financial work.
- **Presentation Software** helps create visual presentations for meetings and education.
- **Database Software** manages large amounts of structured data securely.
- **Communication Software** enables email, messaging, and video conferencing.
- These applications reduce manual work and increase efficiency in daily tasks.

---

## THEORY EXERCISE

### What is the role of application software in businesses?

- Application software helps automate business processes.
- It improves efficiency, accuracy, and speed of operations.
- Businesses use it for accounting, communication, data management, and customer service.
- It supports decision-making through reports and analytics.
- Application software plays a key role in improving productivity and competitiveness.

---

# Software Development Process

- The Software Development Process is a structured approach used to design, build, test, and maintain software.
- It helps ensure software is developed systematically and meets user requirements.
- This process improves quality, reduces risks, and ensures timely delivery.

---

## LAB EXERCISE

### Flowchart: Software Development Life Cycle (SDLC)

```
Start
  │
  ▼
Requirement Analysis
  │
  ▼
System Design
  │
  ▼
Development (Coding)
  │
  ▼
Testing
  │
  ▼
Deployment
  │
  ▼
Maintenance
  │
  ▼
End
```

### Explanation:

- The process starts with understanding requirements.
- The system is designed and then developed.
- After testing, the software is deployed.
- Maintenance is done to fix issues and add improvements.

---

## THEORY EXERCISE

### What are the main stages of the software development process?

- **Requirement Analysis:** Understanding what the user needs from the software.
- **Design:** Planning the system architecture and overall solution.
- **Development:** Writing the actual code based on the design.
- **Testing:** Checking the software for errors and bugs.
- **Deployment:** Releasing the software for users.
- **Maintenance:** Updating and fixing the software after release.

---

# Software Requirement

- Software requirements describe what a software system should do.
- They define the features, functions, and constraints of the system.
- Clear requirements help developers build the right solution.

---

## LAB EXERCISE

### Requirement specification for a Simple Library Management System

**Functional Requirements:**

- The system should allow adding, updating, and deleting books.
- The system should manage student/member records.
- It should issue and return books.
- It should track due dates and fines.

**Non-Functional Requirements:**

- The system should be easy to use.
- Data should be stored securely.
- The system should respond quickly to user actions.
- Only authorized users should access the system.

---

## THEORY EXERCISE

### Why is the requirement analysis phase critical in software development?

- Requirement analysis ensures a clear understanding of user needs.
- It helps avoid misunderstandings and costly changes later.
- Proper requirements guide design and development decisions.
- It reduces project risks and improves software quality.
- A strong requirement phase leads to successful project outcomes.

---

# Software Analysis

- Software analysis is the process of understanding and defining what a software system must do.
- It focuses on identifying system functionality, user interactions, and data flow.
- Software analysis helps convert user requirements into clear system specifications.

---

## LAB EXERCISE

### Functional analysis for an Online Shopping System

**Main Functional Components:**

- **User Management**

  - User registration and login
  - Profile management
  - Authentication and authorization

- **Product Management**

  - Display product list and details
  - Search and filter products
  - Manage product categories

- **Shopping Cart**

  - Add products to cart
  - Update quantity or remove items
  - View cart summary

- **Order Management**

  - Place orders
  - Track order status
  - Order history

- **Payment Processing**

  - Select payment method
  - Process online payments
  - Generate invoices

- **Admin Functions**

  - Add/update/delete products
  - Manage orders and users
  - View sales reports

---

## THEORY EXERCISE

### What is the role of software analysis in the development process?

- Software analysis helps clearly understand user needs and system requirements.
- It identifies functional and non-functional requirements early.
- Proper analysis reduces development errors and rework.
- It provides a strong foundation for system design and implementation.
- Software analysis ensures the final product meets business goals.

---

# System Design

- System design is the process of defining the architecture, components, and interfaces of a system.
- It converts software requirements into a technical blueprint.
- System design guides developers during implementation.

---

## LAB EXERCISE

### Basic system architecture for a Food Delivery App

```
User (Mobile App / Web)
        │
        ▼
Presentation Layer
(UI Screens, Forms)
        │
        ▼
Business Logic Layer
(Order Processing, Pricing, Delivery Logic)
        │
        ▼
API / Backend Server
        │
        ▼
Database
(Users, Restaurants, Orders)
        │
        ▼
External Services
(Payment Gateway, Maps, Notifications)
```

### Explanation:

- Users interact with the app through the presentation layer.
- Business logic processes orders, pricing, and delivery rules.
- Backend server manages APIs and data flow.
- Database stores application data.
- External services support payments, maps, and notifications.

---

## THEORY EXERCISE

### What are the key elements of system design?

- **Architecture:** Overall structure of the system.
- **Components:** Individual modules performing specific functions.
- **Data Design:** How data is stored and managed.
- **Interface Design:** Interaction between system components.
- **Security Design:** Protection of data and system access.
- **Scalability:** Ability to handle growth and increased load.

---

# Software Testing

- Software testing is the process of evaluating a software application to identify errors and ensure it works as expected.
- It verifies that the software meets requirements and produces correct results.
- Testing improves quality, reliability, and user satisfaction.

---

## LAB EXERCISE

### Develop test cases for a simple calculator program

| Test Case ID | Input | Operation | Expected Output | Result |
| ------------ | ----- | --------- | --------------- | ------ |
| TC-01        | 10, 5 | Addition  | 15              | Pass   |
| TC-02        | 10, 5 | Subtract  | 5               | Pass   |
| TC-03        | 10, 5 | Multiply  | 50              | Pass   |
| TC-04        | 10, 5 | Divide    | 2               | Pass   |
| TC-05        | 10, 0 | Divide    | Error message   | Pass   |
| TC-06        | -5, 5 | Addition  | 0               | Pass   |

### Explanation:

- Test cases check normal inputs, edge cases, and error conditions.
- Each test ensures the calculator performs correct calculations.

---

## THEORY EXERCISE

### Why is software testing important?

- Software testing helps detect bugs before the software is released.
- It ensures the application works according to user requirements.
- Testing improves software reliability and performance.
- It reduces maintenance cost by fixing issues early.
- Testing builds user trust and confidence in the software.

---

# Maintenance

- Software maintenance is the process of updating and improving software after deployment.
- It ensures the application continues to work correctly over time.
- Maintenance is essential for long-term software success.

---

## LAB EXERCISE

### Real-world case of critical software maintenance

**Case: Banking Application Update**

- A banking application faced security vulnerabilities due to outdated encryption.
- Hackers attempted unauthorized access to customer data.
- Immediate maintenance was required to update security protocols.
- The bank released a patch to fix vulnerabilities and improve system security.
- This maintenance prevented data breaches and restored customer trust.

---

## THEORY EXERCISE

### What types of software maintenance are there?

- **Corrective Maintenance:** Fixes bugs and errors found after deployment.
- **Adaptive Maintenance:** Updates software to work with new hardware or operating systems.
- **Perfective Maintenance:** Enhances features and improves performance.
- **Preventive Maintenance:** Improves code to prevent future problems.
- These maintenance types help keep software stable, secure, and efficient.

---

# Development

- Development refers to the process of creating software applications using programming tools and technologies.
- It involves designing, coding, testing, and deploying applications.
- Development can be done for web, desktop, or mobile platforms depending on requirements.

---

## THEORY EXERCISE

### What are the key differences between web and desktop applications?

- **Web applications** run in a web browser and require an internet connection.
- They are accessed using URLs and are platform-independent.
- Updates are applied centrally on the server.
- **Desktop applications** are installed directly on a computer.
- They are platform-dependent and require separate versions for different operating systems.
- Updates must be installed manually or through application updates.
- Desktop apps usually have deeper access to system resources.

---

# Web Application

- A web application is a software program that runs on a web server and is accessed through a browser.
- It allows users to interact with data online.
- Web applications are commonly used for email, shopping, and social media.

---

## THEORY EXERCISE

### What are the advantages of using web applications over desktop applications?

- Web applications do not require installation on individual devices.
- They are accessible from anywhere using an internet connection.
- Updates are automatic and centrally managed.
- Web apps are platform-independent.
- They reduce maintenance and deployment costs.

---

# Designing

- Designing refers to planning the visual layout and user experience of an application.
- It focuses on how users interact with the application.
- Good design improves usability and user satisfaction.

---

## THEORY EXERCISE

### What role does UI/UX design play in application development?

- UI design focuses on the visual appearance of an application.
- UX design focuses on user experience and ease of use.
- Good UI/UX design improves accessibility and usability.
- It helps users complete tasks efficiently and comfortably.
- Effective UI/UX design increases user engagement and retention.

---

# Mobile Application

- A mobile application is software designed to run on mobile devices like smartphones and tablets.
- Mobile apps can be developed using different approaches and technologies.
- They are optimized for touch interaction and portability.

---

## THEORY EXERCISE

### What are the differences between native and hybrid mobile apps?

- **Native mobile apps** are developed specifically for a single platform.
- They offer better performance and full access to device features.
- Native apps require separate development for each platform.
- **Hybrid mobile apps** are built using web technologies and run inside a native container.
- They can run on multiple platforms with a single codebase.
- Hybrid apps are faster to develop but may have lower performance compared to native apps.

---

# DFD (Data Flow Diagram)

- A Data Flow Diagram (DFD) is a graphical representation of how data flows within a system.
- It shows the movement of data between processes, data stores, and external entities.
- DFDs help understand system functionality without focusing on technical implementation.

---

## LAB EXERCISE

### DFD for a Hospital Management System (Level 0 – Context Diagram)

```
Patient
   │
   │  Patient Details / Appointment Request
   ▼
Hospital Management System
   ▲
   │  Appointment Info / Reports
   │
Doctor
```

**Expanded (Level 1 – Simple):**

```
Patient
   │
   ▼
[ Register Patient ] ───► ( Patient Database )
   │
   ▼
[ Appointment Management ] ───► ( Appointment Records )
   │
   ▼
Doctor
```

- Patients provide details and request appointments.
- The system stores patient and appointment data.
- Doctors access patient records and appointment details.

---

## THEORY EXERCISE

### What is the significance of DFDs in system analysis?

- DFDs help visualize how data moves through a system.
- They make complex systems easier to understand.
- DFDs improve communication between developers and stakeholders.
- They help identify missing processes or data flows.
- DFDs support accurate system planning and analysis.

---

# Desktop Application

- A desktop application is software installed and run directly on a computer.
- It does not require a web browser to operate.
- Desktop applications can access system resources directly.

---

## LAB EXERCISE

### Build a simple desktop calculator application using a GUI library (Conceptual)

[calculator](./Lab/calculator.html)

- Create a window with buttons for numbers and operations.
- Add a display area to show input and results.
- Handle button click events to perform calculations.
- Display the result on the screen.
- This demonstrates basic GUI-based desktop application development.

---

## THEORY EXERCISE

### What are the pros and cons of desktop applications compared to web applications?

**Pros**

- Better performance and faster execution.
- Can work offline.
- Full access to system hardware.

**Cons**

- Platform-dependent.
- Requires installation and manual updates.
- Limited accessibility compared to web applications.

---

# Flow Chart

- A flowchart is a diagram that represents the logical flow of a process or program.
- It uses standard symbols to show steps and decision points.
- Flowcharts help visualize program logic clearly.

---

## LAB EXERCISE

### Flowchart for a Basic Online Registration System

```
Start
  │
  ▼
User Enters Details
  │
  ▼
Are Details Valid?
  │        │
 Yes       No
  │        │
  ▼        ▼
Save Data  Show Error
  │
  ▼
Registration Successful
  │
  ▼
End
```

---

## THEORY EXERCISE

### How do flowcharts help in programming and system design?

- Flowcharts help understand program logic before coding.
- They make complex processes easy to visualize.
- Flowcharts reduce logical errors during development.
- They help in debugging and documentation.
- Flowcharts improve communication among team members.

---
