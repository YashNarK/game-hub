
import { Button } from "@chakra-ui/react";

interface Props{
    isDisabled:boolean;
    onClick: ()=>void;
}

const ClearButton = ({isDisabled,onClick}:Props) => (
    <Button
        variant={"ghost"}
        ms={2}
        isDisabled={isDisabled}
        onClick={onClick }
    >
        Clear
    </Button>
)

export default ClearButton