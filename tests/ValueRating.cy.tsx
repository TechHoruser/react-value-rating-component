import { ValueRating } from '../src';

describe('ValueRating Component', () => {
	it('should render with default props', () => {
		// Monta el componente en un div vacío
		cy.mount(<ValueRating value={0} />);

		// Verifica que el componente se renderice correctamente
		cy.get('.valueRating').should('exist');
		cy.get('.icon').should('exist');
		cy.get('.triangle').should('have.class', 'neutral');
	});

	it('should update status to "good" when value is above startGood', () => {
		// Monta el componente con un valor que debería dar "good"
		cy.mount(<ValueRating value={10} startGood={5} />);

		// Verifica que el estado se actualice a "good"
		cy.get('.triangle').should('have.class', 'good');
	});

	it('should update status to "bad" when value is below endBad', () => {
		// Monta el componente con un valor que debería dar "bad"
		cy.mount(<ValueRating value={-5} endBad={0} />);

		// Verifica que el estado se actualice a "bad"
		cy.get('.triangle').should('have.class', 'bad');
	});
});
