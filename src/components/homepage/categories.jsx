import {IconBag, IconHouse, IconBolt} from "./Icons";

const CATEGORIES = [
  {
    icon: <IconBag />,
    title: "Share Groceries",
    tag: "Receipt OCR & Item Breakdown",
    desc: "Snap the receipt. Tap who had the oat milk and who shared the paper towels. RentSplit calculates tax and tips per person automatically.",
  },
  {
    icon: <IconHouse />,
    title: "Monthly Rent",
    tag: "By room size & private bath",
    desc: "Configure rent based on square footage, master bedroom perks, or equal splits. Auto-reminders dispatch 3 days before the 1st of the month.",
  },
  {
    icon: <IconBolt />,
    title: "Wi-Fi & Power",
    tag: "Recurring auto-schedulers",
    desc: "Link electric, gas, water, or fiber bills. Settle recurring fixed and fluctuating utility invoices cleanly without recurring debates.",
  },
];

function Categories() {
  return (
    <section className="rs-categories" id="features">
      <div className="rs-container">
        <div className="rs-section-head">
          <h2 className="rs-section-title">SPLIT EVERYTHING WITH 1 TAP</h2>
          <p className="rs-section-desc">Smart categories tailored specifically for shared apartments and roommates.</p>
        </div>

        <div className="rs-category-grid">
          {CATEGORIES.map((cat) => (
            <div className="rs-category-card" key={cat.title}>
              <div className="rs-category-icon">{cat.icon}</div>
              <h3 className="rs-category-title">{cat.title}</h3>
              <p className="rs-category-tag">{cat.tag}</p>
              <p className="rs-category-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;