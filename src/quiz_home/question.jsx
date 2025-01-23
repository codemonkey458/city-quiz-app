import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, RadioGroup, FormControlLabel, Radio, Container } from "@mui/material";
import delhiMonumentQuestions from "./cities.js"


function Question(){
  // Generate a random number between 1 and 6 (inclusive)
  const randomIndex = Math.floor(Math.random() * 6);

  // Get the random question
  const questionData = delhiMonumentQuestions[randomIndex];

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Card variant="outlined" style={{ maxWidth: 600, margin: "0 auto", padding: "1rem" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {questionData.question}
          </Typography>

          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {questionData.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Question;
