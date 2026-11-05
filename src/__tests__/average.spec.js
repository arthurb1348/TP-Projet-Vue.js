import { describe, it, expect } from 'vitest'
import { average } from '../services/services.js'

describe('Fonction average', () => {
    it('calcule la moyenne de plusieurs nombres', () => {
        expect(average([10, 20, 30])).toBe(20)
    })

    it('renvoie le nombre lui-même pour un seul élément', () => {
        expect(average([7])).toBe(7)
    })

    it('prend les zéros en compte dans le calcul', () => {
        expect(average([0, 10])).toBe(5)
    })

    it('calcule la moyenne de nombres négatifs', () => {
        expect(average([-10, -20, -30])).toBe(-20)
    })

    it('calcule une moyenne décimale', () => {
        expect(average([0.1, 0.2])).toBeCloseTo(0.15, 6)
    })

    it('renvoie 0 pour un tableau vide', () => {
        expect(average([])).toBe(0)
    })

    it('renvoie 0 si le paramètre vaut null', () => {
        expect(average(null)).toBe(0)
    })

    it('renvoie 0 si aucun argument n’est fourni', () => {
        expect(average()).toBe(0)
    })
})