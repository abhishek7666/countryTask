

export interface Icountry{
        name: string;
        capital: string;
        languages: string[];
        population: number;
        flag: string;
        currencies?: Icurrencies[]
}      
        
        interface Icurrencies{
            code: string;
            name: string;
            symbol: string;
        }
          
        
