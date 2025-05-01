import { ThemeToggle } from "../components/ThemeTooggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () =>{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme toggle*/}
            <ThemeToggle />
            {/*Backgroud Effects*/}
            <StarBackground/>
            {/*NavBar*/}

            {/*Main Content*/}

            {/*Footer*/}

        </div>
    );
};