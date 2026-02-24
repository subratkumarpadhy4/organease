# OrganIQ Future Features & TODO List

## 1. Automated Inventory Deduction (Approval-Based Stock)
*   **Trigger Mechanism:** Instead of deducting an organ the moment a hospital places a request (like e-commerce), tie the stock deduction directly to the Admin Dashboard's `UpdateOrderModal`.
*   **Logic Flow:** When an admin changes the status to **"Request Accepted"**, the backend should automatically intercept the API call, parse the amount requested, and subtract that exact quantity from the total `pQuantity` in the original `Products` database.
*   **Reversal Failsafe:** If an admin mistakenly approves but later flips the status to **"Cancelled"**, the system must intelligently reverse the transaction and add those organs back into the general available pool to prevent wastage.

## 2. "My Requests" User History Portal
*   **The Problem:** Currently, hospitals/users have no way to track if their organ request was actually approved or rejected after they click "Request Now".
*   **Backend Re-use:** Utilize the pre-existing `getOrderByUser` API endpoint in `server/controller/orders.js`. It already accepts a User ID and returns that specific hospital's exact order history.
*   **Frontend UI:** Build a clean "My Requests" tab on the User Dashboard displaying their order rows (Organ, Quantity, Address, Submission Date).
*   **Visual Tracking:** Add prominent, color-coded badges to reflect their live status ("Under Scrutiny", "Request Accepted", etc.). (Bonus points: Implement a "pizza-tracker" UI stepper).
*   **Real-Time Polling (Optional):** Implement a silent background poll that asks the server for status updates every 30 seconds so their screen instantly turns green upon admin approval without manual refreshing.

## 3. Dynamic 3D Animation (Premium User Portal UI)
*   **The Problem:** The current Hospital/User Dashboard (`UserProfile.js` and `UserOrders.js`) feels slightly empty and generic due to excessive whitespace when a newly registered hospital has no data yet.
*   **The Concept:** Inject a premium, high-quality 3D animated element (e.g., a rotating medical cross, floating anatomical lungs/heart, or a glowing OrganIQ shield) into the empty spaces of the dashboard to create a futuristic, high-tech medical logistics environment.
*   **Implementation Path:** Utilize libraries like `framer-motion` for buttery-smooth CSS hover physics, or integrate `react-three-fiber` along with a lightweight `.gltf` 3D model if we aim for true interactive 3D assets that follow the user's cursor.
*   **Placement Candidates:** Can be positioned as a massive, subtle background watermark, a persistent widget next to the new "My Requests" tracker, or as a vibrant "Welcome Desk" placeholder component when a hospital has 0 pending requests.

## 4. Strict Admin Workflow System (Guided Action Buttons)
*   **The Problem:** The current Admin Dashboard uses a simple dropdown menu for updating organ request statuses. This allows admins to accidentally or maliciously skip crucial pipeline steps (e.g., jumping from "Not Processed" straight to "Expired" or "Delivered").
*   **The Solution:** Replace the free-form `UpdateOrderModal` dropdown with a legally bound **State Machine UI**. 
*   **Implementation Flow:** The system should inspect the order's current `status` and strictly render only the chronologically legal next steps as primary action buttons:
    *   `[Not Processed]` -> Renders buttons for `[Begin Scrutiny]` or `[Cancel Request]`
    *   `[Under Scrutiny]` -> Renders buttons for `[Accept Request]` or `[Reject Details]`
    *   `[Request Accepted]` -> Renders buttons for `[Mark Dispatched]` or `[Cancel Request]`
*   **Benefit:** This heavily reduces administrative errors, logically enforces correct medical protocol order of operations, and provides a much faster one-click user experience compared to searching through a dropdown list.

## 5. Indian Waitlist Transparency Dashboard (Public Metrics)
*   **The Problem:** In India, organ donation data is highly fragmented across state-level SOTTOs. Patients and hospitals have zero transparency regarding exactly how many people are waiting for a specific organ versus how many are actually being donated.
*   **The Concept:** Build a live, data-rich "National/Regional Waitlist" widget directly into the OrganIQ software (either on the Landing Page or prominently within the User Dashboard).
*   **Implementation Flow:** 
    *   The system must pull live (or intelligently simulated) metrics tracking the **Supply vs. Demand gap**.
    *   Crucially, this data must be broken down *per organ category*. (e.g., Lungs: 12 Available / 4,300 Waiting | Kidneys: 42 Available / 112,000 Waiting).
*   **Mission Impact:** By forcefully surfacing the waitlist data for each individual organ, OrganIQ proves to the user exactly why the platform exists—transforming OrganIQ from a standard e-commerce clone into a mission-critical tool fighting the Indian organ shortage crisis.

## 6. AI-Driven "Cold Ischemia" Transit Optimizer (Hackathon Winner)
*   **The Problem:** Hospitals can blindly request an organ even if the geographical distance makes it scientifically impossible for the organ to survive the transit time.
*   **The Concept:** Integrate a live mapping engine (e.g., Google Maps Matrix API) into the Request checkout flow.
*   **Implementation Flow:** The backend actively calculates: `Geographical Distance + Traffic Algorithms + Flight Availability = Transit Time`. If the calculated transit time exceeds the organ's specific "Cold Ischemia Limit" (e.g., trying to transport a heart on a 6-hour route when it only survives for 4 hours), the software autonomously rejects the request to prevent organ wastage.

## 7. DeepLink "Green Corridor" Police Integration Prototype (Hackathon Winner)
*   **The Problem:** Transporting organs currently requires manually calling the police to shut down intersections, leading to massive transit delays.
*   **The Concept:** A distress signal dispatch API built directly into the OrganIQ Admin Dashboard.
*   **Implementation Flow:** When an admin clicks `[Mark Dispatched]`, the system generates a unique, secure URL (e.g., `organiq.in/transit/TXN-123`) and SMS-texts it to Regional Traffic Authorities via Twilio. When opened on a mobile device, the UI renders a live HTML5 Geolocation map of the ambulance approaching their sector.

## 8. Immutable "Chain of Custody" Ledger (Hackathon Winner)
*   **The Problem:** Organ trafficking algorithms and black market interception risks.
*   **The Concept:** Transition completely away from easily altered MongoDB timestamps and build a faux/live Blockchain-based accountability ledger for each organ.
*   **Implementation Flow:** A dedicated `Chain of Custody` UI. Every time the organ physically changes hands (Donor Hospital ➡️ Transport Courier ➡️ Helicopter Pilot ➡️ Receiving Surgeon), the custodian scans a QR code that creates a cryptographically hashed, non-editable timestamp block in the system.
