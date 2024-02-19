import React from "react"
import { AlertDialog, AlertDialogBody, AlertDialogFooter,Button, Flex, Box, useDisclosure, Center } from "@chakra-ui/react"

type Props = {
    handleDelete: (id: string, index: number) => void
    handleClosePopUp: (index: number) => void
    id: string
    index: number
}

export function DeleteDialog(props : Props  ) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const cancelRef = React.useRef()
    const cancelRef = React.useRef<HTMLElement | null>(null);
    return (
        <AlertDialog isOpen={true}  leastDestructiveRef={cancelRef}
    onClose={onClose}  >
        {/* <Center  > */}
        
        <Box position={'relative'}   zIndex={1}  bg={'pink'} w={'80vw'} ml={'10vw'}>
        
        <AlertDialogBody>
                Are you sure, you want to delete?
            </AlertDialogBody>
            <AlertDialogFooter justifyContent={'flex-start'} >
        
        <Flex >
            <Button colorScheme='pink' onClick={() => props.handleDelete(props.id, props.index)} w={'30vw'} >
            Delete
            </Button>
            <Button w={'30vw'} ml={'3vw'} onClick={() => props.handleClosePopUp(props.index)} ref={cancelRef as React.RefObject<HTMLButtonElement>}>
            Cancel
            </Button>
        </Flex>
        
        </AlertDialogFooter>
        
        </Box>
        {/* </Center> */}
    </AlertDialog>
    )
    
}
