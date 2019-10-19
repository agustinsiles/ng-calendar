import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    constructor(private http: HttpClient) {}

    getWeather(city: string): Observable<any> {	
		return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0af3f757fb9fbeb57bd8c409e99c7d76`)
			.pipe(
				take(1),
				map((response: any) => response.weather[0].main),
				catchError(err => throwError(err))
			)
	}
}
