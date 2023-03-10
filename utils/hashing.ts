import crypto from 'crypto'

const hash = (text:string): string => {

    const hash = crypto.createHash('sha256');
    let passwordhashed = ''
    hash.on('readable', () => {
  
      const data = hash.read();
      
      if (data) {
        passwordhashed = data.toString('hex')
        return passwordhashed
      }
    });
    
    hash.write(text);
    hash.end();
    return passwordhashed
  }
export {hash}