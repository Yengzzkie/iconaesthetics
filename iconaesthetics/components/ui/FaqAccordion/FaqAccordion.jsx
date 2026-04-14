"use client";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function FaqAccordion({ question, answer }) {
  return (
    <div>
      <Accordion sx={{ background: 'var(--primary)', boxShadow: 'none', borderBottom: '0.5px solid #00000033', paddingY: '.5rem', borderRadius: '0 !important' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }} component="span">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: '300' }}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
