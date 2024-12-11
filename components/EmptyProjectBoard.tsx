
import { Button } from "./ui/button"
import { MessyIcon } from "./icons/MessyIcon"

export const EmptyProjectBoard = () => {
    return (
        <div className="grid place-items-center">
            <div className="icon mb-8">
                <MessyIcon />
            </div>

            <div className="text-[#bdbecb] font-medium text-base mb-8">
                Your productivity journey starts here. Start your first project!
            </div>

            <div>
                <Button className="text-custom-4 text-base font-bold" label={ "Create a project" } />
            </div>
        </div>
    )
}

