import iconSupervisor from './../assets/images/icon-supervisor.svg';
import iconTeamBuilder from './../assets/images/icon-team-builder.svg';
import iconKarma from './../assets/images/icon-karma.svg';
import iconCalculator from './../assets/images/icon-calculator.svg';

const colors = {
	red: 'hsl(0, 78%, 62%)',
	skyblue: 'hsl(180, 62%, 55%)',
	yellow: 'hsl(34, 97%, 64%)',
	blue: 'hsl(212, 86%, 64%)',
};

export const cardData = [
	{
		id: 1,
		title: 'supervisor',
		desc: 'Monitors activity to identify project roadblocks',
		iconSrc: iconSupervisor,
		borderTopColor: colors.skyblue,
	},
	{
		id: 2,
		title: 'team builder',
		desc: 'Scans our talent network to create the optimal team for your project',
		iconSrc: iconTeamBuilder,
		borderTopColor: colors.red,
	},
	{
		id: 3,
		title: 'karma',
		desc: 'Regularly evaluates our talent to ensure quality',
		iconSrc: iconKarma,
		borderTopColor: colors.yellow,
	},
	{
		id: 4,
		title: 'calculator',
		desc: 'Uses data from past projects to provide better delivery estimates',
		iconSrc: iconCalculator,
		borderTopColor: colors.blue,
	},
];
