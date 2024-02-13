import { Badge, Box, Button, ButtonGroup } from "@chakra-ui/react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import useGameQueryStore from "../../store";

const Pagination = () => {
  const { hasNext, hasPrev, pageNumber, onNext, onPrev } = useGameQueryStore(
    (s) => ({
      hasNext: Boolean(s.page.hasNextPage),
      hasPrev: Boolean(s.page.hasPrevPage),
      pageNumber: s.gameQuery.page,
      onNext: s.handleNextPage,
      onPrev: s.handlePrevPage,
    })
  );

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
      >
        <ButtonGroup gap={4}>
          <Button
            onClick={onPrev}
            isDisabled={!hasPrev}
            variant={"ghost"}
            colorScheme="blue"
          >
            <MdNavigateBefore />
            Prev
          </Button>
          <Badge colorScheme="green" h={5} my={"auto"} cursor={"default"}>
            {pageNumber}
          </Badge>
          <Button
            onClick={onNext}
            isDisabled={!hasNext}
            variant={"ghost"}
            colorScheme="red"
          >
            Next
            <MdNavigateNext />
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Pagination;
