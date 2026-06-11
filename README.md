# GitHub Trending Dashboard

A modern Angular application that displays the top 20 trending GitHub repositories and allows users to view detailed repository information.

## Live Features

* View the top 20 trending GitHub repositories
* Navigate to repository details
* View repository statistics and metadata
* Open repositories directly on GitHub
* Loading and error state handling
* Responsive design using Tailwind CSS
* Browser back-button support
* Unit and End-to-End testing

---

## Tech Stack

### Frontend

* Angular 22
* TypeScript
* Angular Signals
* Angular Router
* Angular HttpClient

### Styling

* Tailwind CSS

### Testing

* Angular Testing Framework (Vitest/Jasmine-style component tests)
* Playwright (End-to-End UI Tests)

### Package Manager

* pnpm

---

## Application Architecture

```text
src/app
│
├── core
│   ├── models
│   │   └── repository.model.ts
│   │
│   └── services
│       └── github.ts
│
├── features
│   ├── dashboard
│   └── repository-details
│
├── shared
│   └── repository-card
│
├── app.routes.ts
└── app.config.ts
```

### Architecture Decisions

#### Service Layer

A dedicated `GithubService` is used to communicate with the GitHub REST API.

Benefits:

* Separation of concerns
* Reusable API layer
* Easier testing
* Improved maintainability

#### Strong Typing

Repository data is modeled using TypeScript interfaces.

Benefits:

* Compile-time validation
* Better IDE support
* Improved maintainability

#### Angular Signals

Signals are used for component state management.

Examples:

* Repository list
* Loading state
* Error state

Benefits:

* Modern Angular approach
* Improved reactivity
* Simpler state management

---

## Implemented Features

### Dashboard

Displays the top 20 trending repositories using the GitHub Search API.

Repository information includes:

* Name
* Description
* Language
* Stars
* Forks

### Repository Details

Displays:

* Repository Name
* Description
* Owner
* Owner Avatar
* Language
* Stars
* Forks
* Watchers
* Open Issues
* Default Branch
* Last Updated Date
* Link to GitHub Repository

### Routing

Routes implemented:

```text
/
```

Dashboard page

```text
/repository/:owner/:repo
```

Repository details page

### User Experience

* Loading state
* Error state
* Responsive layout
* Back navigation support

---

## Testing

### Unit Tests

Implemented using Angular's testing framework.

Coverage includes:

* App Component
* Dashboard Component
* Repository Details Component
* Repository Card Component
* GitHub Service

### End-to-End Tests

Implemented using Playwright.

Test Cases:

1. Dashboard loads successfully
2. Repository cards are displayed
3. Clicking a repository navigates to details page
4. Browser back button returns to dashboard
5. Error state is displayed when API requests fail

---

## GitHub API

The application uses GitHub REST API:

### Trending Repositories

```http
GET https://api.github.com/search/repositories
```

Query:

```text
created:>last-30-days
sort=stars
order=desc
per_page=20
```

### Repository Details

```http
GET https://api.github.com/repos/{owner}/{repo}
```

---

## Running Locally

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm start
```

Application URL:

```text
http://localhost:4200
```

### Run Unit Tests

```bash
pnpm test
```

### Run End-to-End Tests

```bash
pnpm e2e
```

---

## Future Improvements

If given additional time, the following enhancements could be implemented:

* GitHub API authentication
* Repository caching
* Pagination and infinite scrolling
* Search and filtering
* Dark mode support
* Skeleton loaders
* Retry functionality for failed requests
* README rendering from repository content
* CI/CD pipeline with GitHub Actions

---

## Trade-Offs Considered

### GitHub Search API

The Search API was chosen because it provides a simple and effective way to identify trending repositories based on star count and creation date.

### Angular Signals vs State Management Library

Signals were selected instead of introducing NgRx or another state-management library because the application's state is relatively small and Signals provide a lightweight, modern solution.

### Testing Strategy

A combination of component tests and Playwright end-to-end tests was used to balance fast feedback with realistic user interaction validation.

---

## Author

Built as part of a frontend engineering evaluation project using Angular, Tailwind CSS, GitHub REST API, and Playwright.
