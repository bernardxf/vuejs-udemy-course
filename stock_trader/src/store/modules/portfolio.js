const state = {
	founds: 10000,
	stocks: []
}

const mutations = {
	'BUY_STOCKS' (state, {stockId, stockPrice, quantity}) {
		const record = state.stocks.find(elemnet => elemnet.id == stockId);
		if (record) {
			record.quantity += quantity;
		} else {
			state.stocks.push({
				id: stockId,
				quantity: quantity
			});
		}
		state.founds -= stockPrice * quantity;
	},
	'SELL_SOTCKS' (state, {stockId, stockPrice, quantity}) {
		const record = state.stocks.find(elemnet => elemnet.id == stockId);
		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}
		state.founds += stockPrice * quantity;
	}
};

const actions = {
	buyStock: ({ commit }, order) => {
		commit();
	},
	initStocks: ({ commit }) => {
		commit('SET_STOCKS', stocks);
	},
	randomizeStocks: ({ commit }) => {
		commit('RND_SOTCKS');
	}
}

const getters = {
	stocks: state => {
		return state.stocks;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
