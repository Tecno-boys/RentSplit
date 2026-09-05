
**# Project Title:** Rent Split

**Objective:** Develop an automated bill-splitting and expense-tracking platform designed for roommates to track, divide, and settle shared living costs (rent, utilities, groceries, and common purchases) with minimal manual effort.

---

**## 1. Project Scope & Deliverables**

**Core User Roles**

* **Household Admin:** Creates the group, sets up recurring bills (rent, utilities), invites roommates, and manages split rules.
* **Roommate/Member:** Joins household, adds daily expenses, views balances, and settles payments.

**Functional Requirements**

* **User & Household Management**
* Account creation, authentication, and user profile management.
* Household creation, unique join codes, and multi-user invitation flow.
* Custom split configurations (equal splits, percentage-based, or per-room adjustments).
* **Expense & Automated Split Tracking**
* **Recurring Bills:** Scheduled automation for rent, Wi-Fi, and recurring monthly utilities.
* **Ad-hoc Expenses:** On-the-go logging for groceries, household items, and one-off purchases.
* **Receipt Processing:** Photo upload with basic OCR to auto-extract total amounts and vendor names.
* **Flexible Categorization:** Smart tagging (Rent, Utilities, Groceries, Supplies) for clear spend history.
* **Balances & Debt Simplification**
* Real-time calculation of "who owes whom."
* Debt simplification algorithm (minimizes total transaction transfers between roommates).
* Dashboard displaying individual net balance, total household spend, and upcoming due dates.
* **Settlements & Notifications**
* Direct payment integration (e.g., Venmo, PayPal, Zelle links, or Stripe) and manual "Mark as Paid" toggles.
* Push notifications and automated email reminders for upcoming or overdue payments.

---

**##  2. Out of Scope (Version 1.0)**

* In-app chat or direct messaging (relying on push alerts and standard messaging apps instead).
* Support for multi-currency or foreign exchange conversions.
* Advanced bank account linking via Plaid for direct automatic account scraping (deferred to V2).
* Complex lease management software features (e.g., maintenance requests, landlord portals).

---

**## 3. Key Milestones & Phased Roadmap**

| Phase                          | Core Focus                     | Key Deliverables                                                           |
| ------------------------------ | ------------------------------ | -------------------------------------------------------------------------- |
| **Phase 1: Foundation**  | Authentication & Architecture  | Database schema, user login, group creation, and manual expense entry.     |
| **Phase 2: Automation**  | Recurring Logic & Split Engine | Auto-generating rent/utility bills, custom split logic, balance dashboard. |
| **Phase 3: Integration** | Payments & Receipts            | Receipt OCR scanning, payment link integration, debt simplification logic. |
| **Phase 4: Refinement**  | Testing & Launch               | Push notification system, UI polish, security audit, and V1 release.       |

---

**## 4. Technical Stack Considerations**

* **Frontend:** React Native or Flutter (cross-platform iOS/Android mobile application).
* **Backend:** Node.js (Express) or Python (FastAPI) for high-performance RESTful API endpoints.
* **Database:** PostgreSQL (relational structure ideal for transactional ledger data).
* **Cloud & Storage:** AWS S3 or Firebase for storing receipt images; AWS SNS/Firebase Cloud Messaging for alerts.
