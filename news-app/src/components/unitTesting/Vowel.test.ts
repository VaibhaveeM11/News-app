import React from 'react';
import { render } from '@testing-library/react';
import { Vowel } from '@testing-library/react';


describe('should not render anything, string is empty', ()=>{
 const { container } = render(<Vowel/>);
})