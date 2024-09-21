import {ChakraProvider, Heading, Container, Image, Input, Button, Wrap, Stack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [image, setImage] = useState();
  const [prompt, setPrompt] = useState();
  const [loading, setLoading] = useState();

  const generate = async (prompt) => {
    setLoading(true);
    const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`);
    setImage(result.data);
    setLoading(false);
  };

  return (
    <ChakraProvider>
      <Container>
        <Heading>Stable Diffusion App!!🚀</Heading>

        <Wrap>
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            width={"800"}
          ></Input>
          <Button onClick={(e) => generate(prompt)} colorScheme={"green"}>
            Generate
          </Button>
        </Wrap>

        {loading ? (
          <Stack>
            <SkeletonCircle />
            <SkeletonText />
          </Stack>
        ) : image ? (
          <Image src={`data:image/png;base64,${image}`} />
        ) : null}
      </Container>
    </ChakraProvider>
  );
};

export default App;