import { BiCalculator, BiCreditCardAlt, BiHomeAlt, BiUser } from "react-icons/bi";
import { FiSettings, FiUsers } from "react-icons/fi";


export default function Sidebar() {

    const menu = [
        {name: "Home", icon: <BiHomeAlt />},
        {name: "Team", icon: <FiUsers />},
        {name: "Id Card", icon: <BiCreditCardAlt />},
        {name: "Contact", icon: <BiUser />},
        {name: "Saldo", icon: <BiCalculator />},
        {name: "Setting", icon: <FiSettings />}
    ]

    return(
        <div className="h-screen border-r border-gray-200 w-64 px-9 space-y-24">
            {/* logo/brand */}
            <div className="flex flex-row items-center pt-8">
                <img className="w-9 h-9" src="/next.svg" alt="Acorp" />
                <div>Acorp</div>
            </div>
            <div className="space-y-24">
                {/* Menu */}
                <div>
                    <div className="mb-4">Menu</div>
                    <ul className="space-y-7">
                        {
                            menu.map((val, index) => {
                                return(
                                    <li key={index} className="mb-7 flex flex-row items-center">
                                        <div className="mr-5">{val.icon}</div>
                                        <div>{val.name}</div>                                    
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                {/* About and Information */}
                {/* toogle dark/light mode */}
            </div>
                
        </div>
    );
}