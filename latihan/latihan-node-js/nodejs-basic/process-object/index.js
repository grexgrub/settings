    const initialMemoryUsage = process.memoryUsage().heapUsed
    const yourName = 'Zanuar Rikza Aditiya'
    const environment = 'development'
    
    let a = 0
     
    for(let i = 0; i <= 10000; i++) {
        a++
    }
     
    const currentMemoryUsage = process.memoryUsage().heapUsed
     
    console.log(`Hai, ${yourName}`);
    console.log(`Mode environment: ${environment}`)
    console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
    
