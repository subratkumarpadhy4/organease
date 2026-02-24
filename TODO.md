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
