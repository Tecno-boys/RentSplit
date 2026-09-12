# RentSplit UML and Documentation Source

This package contains the UML/ER source for the RentSplit hackathon MVP.

## Scope assumed by these diagrams

RentSplit manages shared household expenses. A household contains members. Members can add one-time or recurring expenses, choose equal/percentage/fixed/custom splits, view balances, generate an optimized settlement plan, record payments, send reminders, and optionally scan receipts using an AI/OCR service.

## Diagram files

01-use-case.puml              Use Case Diagram
02-class-diagram.puml         UML Class Diagram
03-sequence-add-expense.puml  Add Expense Sequence Diagram
04-sequence-receipt-ai.puml   Receipt + AI/OCR Sequence Diagram
05-sequence-settlement.puml   Settlement Sequence Diagram
06-activity-settlement.puml   Settlement Activity Diagram
07-component-diagram.puml     Component Diagram
08-deployment-diagram.puml    Deployment Diagram
09-state-expense.puml         Expense State Diagram
10-er-diagram.puml            Entity-Relationship Diagram

## Recommended documentation structure

1. Introduction
   - Project name: RentSplit
   - Purpose: simplify shared household expense management and settlement.
   - Target users: roommates, couples, families, shared apartments and other groups sharing recurring costs.

2. Problem Statement
   Shared households often track rent, utilities, groceries and other expenses manually. Different people pay at different times, split rules can vary, and settlement becomes difficult to calculate and communicate. RentSplit centralizes those transactions and calculates each person's net balance.

3. Objectives
   - Record and categorize shared expenses.
   - Support flexible splitting rules.
   - Track who paid and who owes.
   - Handle recurring household bills.
   - Generate a low-transaction settlement plan.
   - Reduce the effort of entering receipts.
   - Provide reminders and household-level financial visibility.

4. Functional Requirements
   FR-01 Users can register and sign in.
   FR-02 A user can create a household.
   FR-03 A household owner can invite members.
   FR-04 Users can join a household through an invitation.
   FR-05 Members can add expenses.
   FR-06 Expenses can be split equally, by percentage, by fixed amount, or by custom rules.
   FR-07 Members can record recurring expenses.
   FR-08 The system calculates each member's current net balance.
   FR-09 The system generates settlement transactions from net balances.
   FR-10 Members can record payments used to settle debts.
   FR-11 Members can send payment reminders.
   FR-12 Users can upload receipts.
   FR-13 The AI/OCR service can extract receipt information for user confirmation.
   FR-14 Users can view expense history and household summaries.

5. Non-Functional Requirements
   NFR-01 The system should require authentication for protected household data.
   NFR-02 Sensitive API traffic should use HTTPS.
   NFR-03 Financial calculations should use exact decimal arithmetic rather than binary floating-point where possible.
   NFR-04 Access control must prevent users from reading or modifying households they do not belong to.
   NFR-05 Receipt processing should allow user confirmation before creating a financial transaction.
   NFR-06 The application should remain usable on both mobile and desktop screens.
   NFR-07 The system should retain an auditable record of expenses and payments.
   NFR-08 AI extraction should expose confidence/confirmation rather than silently creating transactions.

6. Core Business Rules
   BR-01 Every expense belongs to exactly one household.
   BR-02 Every expense has exactly one payer.
   BR-03 An expense can have one or more expense splits.
   BR-04 The sum of all expense splits must equal the expense total.
   BR-05 A member balance is calculated as amount paid minus amount owed, adjusted for recorded settlement payments.
   BR-06 Positive balance means the member should receive money; negative balance means the member should pay money.
   BR-07 Settlement optimization should minimize the number of transfers while respecting the calculated net balances.
   BR-08 Recurring expenses are templates that can generate future expense records.
   BR-09 AI-extracted receipt data is a proposal until the user confirms it.

7. Main Actors
   Household Owner: creates and manages a household, invites members and manages shared expenses.
   Household Member: participates in expense entry, views balances and records payments.
   AI/OCR Service: extracts structured information from receipt images.
   Payment Service: processes or records external payment transactions when integrated.

8. Core Data Entities
   User, Household, HouseholdMember, Expense, ExpenseSplit, RecurringExpense, Payment, Settlement, Invitation, Receipt and Notification.

9. Architecture
   A client application communicates with a backend API over HTTPS. The backend contains authentication, household, expense, split/balance, settlement, notification and receipt-processing responsibilities. PostgreSQL stores relational data and object storage holds receipt images. Optional external services provide AI/OCR, payments and notifications.

10. Security Considerations
   - Hash passwords with a modern password-hashing algorithm.
   - Authorize every household-scoped request.
   - Validate all expense amounts and split totals server-side.
   - Protect invitation tokens and apply expiration/revocation.
   - Do not trust AI output without user confirmation.
   - Restrict receipt access to authorized household members.
   - Log important financial actions for auditability.

11. Suggested API Surface
   POST   /auth/register
   POST   /auth/login
   POST   /households
   GET    /households/:id
   POST   /households/:id/invitations
   POST   /invitations/:token/join
   GET    /households/:id/members
   POST   /households/:id/expenses
   GET    /households/:id/expenses
   POST   /households/:id/recurring-expenses
   GET    /households/:id/balances
   GET    /households/:id/settlements
   POST   /households/:id/payments
   POST   /households/:id/receipts
   POST   /households/:id/notifications/reminders

12. Hackathon MVP Boundary
   Must-have: authentication, household creation/joining, expense entry, split calculation, balances, settlement generation, basic payment recording, responsive UI.
   Strong demo additions: receipt AI/OCR, recurring bills, reminder generation, household summary.
   Post-hackathon: real payment processing, bank integrations, advanced analytics, item-level grocery splitting, multi-currency support, automated recurring expense creation, native mobile apps.
