import { ChartJSNodeCanvas, ChartCallback } from './';
import { ChartConfiguration } from 'chart.js';
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

const configuration: ChartConfiguration = {
	type: 'bar',
	data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
	},
	plugins: [{
		id: 'background-colour',
		beforeDraw: (chart) => {
			const ctx = chart.ctx;
			ctx.save();
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, 9000, 9000);
			ctx.restore();
		}
	}]
};

export interface PlottingConfiguration {
	imageConfiguration: ImageConfiguration;
	chartConfiguration: ChartConfiguration;
}

export async function plot(
	config: PlottingConfiguration
): Promise<void> {

	config.chartConfiguration.plugins = [
		{
			id: 'background-colour',
			beforeDraw: (chart) => {
				const ctx = chart.ctx;
				ctx.save();
				ctx.fillStyle = 'white';
				ctx.fillRect(0, 0, config.imageConfiguration.resolution.width, config.imageConfiguration.resolution.height);
				ctx.restore();
			}
		}
	];
	
	const chartCallback: ChartCallback = (ChartJS) => {
		ChartJS.defaults.responsive = true;
		ChartJS.defaults.maintainAspectRatio = false;
	};

	const chartJSNodeCanvas = new ChartJSNodeCanvas({ 
		width: config.imageConfiguration.resolution.width, 
		height: config.imageConfiguration.resolution.height, 
		chartCallback 
	});

	const buffer = await chartJSNodeCanvas.renderToBuffer(config.chartConfiguration);
	await fs.writeFile(config.imageConfiguration.path + config.imageConfiguration.name + config.imageConfiguration.extension, buffer, 'base64');
}


/*
main({
	chartConfiguration: configuration,
	imageConfiguration: {
		resolution: resolutions.SXGA,
		extension: ".jpg",
		name: "testFile",
		path: "../"
	}
});
*/