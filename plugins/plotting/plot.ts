import { ChartJSNodeCanvas, ChartCallback } from '.';
import { promises as fs } from 'fs';

export interface Resolution {
	width: number;
	height: number;
}

export interface AvailableResolutions {
	SXGA: Resolution;
	HD: Resolution;
	HDplus: Resolution;
	FHD: Resolution;
	WUXGA: Resolution;
	QHD: Resolution;
	WQHD: Resolution;
	UHD: Resolution;
}

export interface ImageConfiguration {
	resolution: Resolution;
	name: string;
	extension: string;
	path: string;
}

export const resolutions: AvailableResolutions = {
	SXGA: {
		width: 1280,
		height: 1024
	},
	HD: {
		width: 1366,
		height: 768
	},
	HDplus: {
		width: 1600,
		height: 900
	},
	FHD: {
		width: 1920,
		height: 1080
	},
	WUXGA: {
		width: 1920,
		height: 1200
	},
	QHD: {
		width: 2560,
		height: 1440
	},
	WQHD: {
		width: 3440,
		height: 1440
	},
	UHD: {
		width: 3840,
		height: 2160
	}
};

export interface Color {
	r: number;
	g: number;
	b: number;
	a: number;
}

export interface Colors {
	red: Color;
	blue: Color;
	yellow: Color;
	green: Color;
	purple: Color;
	orage: Color;
}

export const colors: Colors = {
	red: {
		r: 255, 
		g: 99, 
		b: 132, 
		a: 1
	},
	blue: {
		r: 54, 
		g: 162, 
		b: 235, 
		a: 1
	},
	yellow: {
		r: 255, 
		g: 206, 
		b: 86, 
		a: 1
	},
	green: {
		r: 75, 
		g: 192, 
		b: 192, 
		a: 1
	},
	purple: {
		r: 153, 
		g: 102, 
		b: 255, 
		a: 1
	},
	orage: {
		r: 255, 
		g: 159, 
		b: 64, 
		a: 1
	}
}

export const arrayOfColors: Array<Color> = [
	colors.red, colors.blue, colors.yellow, colors.green, colors.purple, colors.orage
];

export const stringifiedArrayOfColors: Array<string> = Array.from({length: arrayOfColors.length}, (_, id) => 'rgba(' + arrayOfColors[id].r + ', ' + arrayOfColors[id].g + ', ' + arrayOfColors[id].b + ', ' + arrayOfColors[id].a + ')');

export interface PlottingConfiguration {
	imageConfiguration: ImageConfiguration;
	chartConfiguration: any;
}

export async function plot(
	config: PlottingConfiguration
): Promise<void> {

	config.chartConfiguration.plugins = [
		{
			id: 'background-color',
			beforeDraw: (chart) => {
				const ctx = chart.ctx;
				ctx.save();
				ctx.fillStyle = 'white';
				ctx.fillRect(0, 0, config.imageConfiguration.resolution.width, config.imageConfiguration.resolution.height);
				ctx.restore();
			}
		}
	];

	console.log("OK HEHE 1");
	
	const chartCallback: ChartCallback = (ChartJS) => {
		ChartJS.defaults.responsive = true;
		ChartJS.defaults.maintainAspectRatio = false;
	};

	console.log("OK HEHE 2");

	const chartJSNodeCanvas = new ChartJSNodeCanvas({ 
		width: config.imageConfiguration.resolution.width, 
		height: config.imageConfiguration.resolution.height, 
		chartCallback 
	});

	console.log("OK HEHE 3");
	const buffer = await chartJSNodeCanvas.renderToBuffer(config.chartConfiguration);

	console.log("OK HEHE 4");
	await fs.writeFile(config.imageConfiguration.path + config.imageConfiguration.name + "." + config.imageConfiguration.extension.toLowerCase(), buffer, 'base64');

	console.log("OK HEHE 5");
}