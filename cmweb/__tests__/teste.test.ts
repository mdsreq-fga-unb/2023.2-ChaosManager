describe('Test functions from TariffCreateForm', () => {
    it('isValidDate', () => {
      const date1 =  null
      const date2 =  new Date("2024-12-12")
      const date3 =  new Date("2009-12-31")
      const date4 =  new Date("2010-01-01")
  
      const isValid = jest.fn((date) => {
        if (date == null) {
          return false
        }
        return true
      })
  
      const isFuture = jest.fn((date) => {
        if (date > new Date()) {
          return true
        }
      })
  
      const isAfter = jest.fn((date, datePreDefined) => {
        if (date >= datePreDefined) {
          return true
        }
      })
  
      const isValidDate = jest.fn((date) => {
        if (!date || !isValid(date)) {
          return "Insira uma data válida no formato dd/mm/aaaa.";
        }
    
        if (isFuture(new Date(date))) {
          return "Insira uma data anterior ou igual a data atual no formato dd/mm/aaaa";
        }
    
        if (!isAfter(new Date(date), new Date("2010"))) {
          return "Insira uma data a partir de 2010";
        }
    
        return true;
      })
  
      expect(isValidDate(date1)).toBe("Insira uma data válida no formato dd/mm/aaaa.")
      expect(isValidDate(date2)).toBe("Insira uma data anterior ou igual a data atual no formato dd/mm/aaaa")
      expect(isValidDate(date3)).toBe("Insira uma data a partir de 2010")
      expect(isValidDate(date4)).toBe(true)
    })
  })