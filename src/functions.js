export class WeatherDay {
    constructor(dayOverview, hours) {
        this.dayOverview = dayOverview;
        this.hours = hours;
    }
}
export class OverView {
    constructor(time, temp_min, temp_max, precipitation, weathercode, wind_dir, wind_speed) {
        this.time = new Date(time);
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.precipitation = precipitation;
        this.weathercode = weathercode;
        this.wind_dir = wind_dir;
        this.wind_speed = wind_speed;
    }
}
export class WeatherHour {
    constructor(time, temp_app, is_day, precipitation, temp, uv_index, weathercode, wind_dir, wind_speed) {
        this.time = new Date(time);
        this.temp_app = temp_app;
        this.is_day = is_day;
        this.precipitation = precipitation;
        this.temp = temp;
        this.uv_index = uv_index;
        this.weathercode = weathercode;
        this.wind_dir = wind_dir;
        this.wind_speed = wind_speed;
    }
}

