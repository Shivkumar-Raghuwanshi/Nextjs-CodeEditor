# NextJs-CodeEditor

NextJs-CodeEditor is a simple code editor built using Next.js, TypeScript, Tailwind CSS, Shadcn UI, AWS Amplify, and Docker. Whether you're a developer looking for a lightweight code editing solution or an educator teaching programming concepts, this project aims to provide an intuitive and responsive interface.

## Features

1. **Code Editing:**
   - Users can create, edit, and save code snippets directly in the browser.
   - Syntax highlighting enhances readability for various programming languages.

2. **Responsive Design:**
   - The interface adapts to different screen sizes, making it usable on desktops, tablets, and mobile devices.

3. **Deployment with AWS Amplify:**
   - We've chosen AWS Amplify for deployment due to its simplicity and seamless integration with GitHub repositories.
   - Amplify automatically builds and deploys your app whenever you push changes to the repository.

4. **Containerization with Docker:**
   - Docker provides a consistent development and deployment environment.
   - You can easily package your Next.js app into a Docker container for deployment.

## Tech Stack

- **Next.js:**
  - Next.js is a React framework that simplifies server-rendered application development.
  - It offers features like automatic code splitting, server-side rendering, and routing out of the box.

- **TypeScript:**
  - TypeScript adds static typing to JavaScript, improving code quality and tooling support.
  - It helps catch errors early and provides better documentation for your codebase.

- **Tailwind CSS:**
  - Tailwind CSS is a utility-first CSS framework.
  - It allows you to compose styles by combining utility classes, resulting in a highly maintainable and efficient stylesheet.

- **Shadcn UI:**
  - Shadcn UI provides custom UI components with consistent styling.
  - You can use these components to build a cohesive user interface.

- **AWS Amplify:**
  - AWS Amplify simplifies backend services, authentication, and deployment.
  - Set up an Amplify project, connect it to your GitHub repository, and configure build settings to deploy your Next.js app.

- **Docker:**
  - Docker enables containerization, isolating your app and its dependencies.
  - Create a Docker image for your Next.js app and deploy it to your preferred hosting service.


## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/NextJs-CodeEditor.git
    ```

2. Install dependencies:

    ```bash
    cd NextJs-CodeEditor
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to http://localhost:3000.

## Deployment

1. Set up an AWS Amplify project and connect it to your GitHub repository.
2. Configure the build settings to deploy your Next.js app.
3. Amplify will automatically build and deploy your app whenever you push changes to the repository.

## Docker Repository

You can find the Docker image for this project on Docker Hub at:

```bash
docker pull shivkumar56/codeEditor