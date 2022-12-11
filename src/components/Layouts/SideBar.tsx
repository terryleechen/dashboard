import SideBarData from "./SideBarData";

function SidBar() {
  return (
    <div>
      <ul>
        {SideBarData.map((val, key) => {
          return (
            <li key={key}>
              <div className="hover:bg-cyan-700">{val.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SidBar;
