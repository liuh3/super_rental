import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({

	actions: {
		save(){
			var title = this.get("title");
			var owner = this.get("owner");
			var type  = this.get("type");
			var location = this.get("location");
			var bedrooms = this.get("bedrooms");

			// var new_rental = 
			this.store.push( 'rentals',{
				title: title,
				owner: owner,
				city: location,
				type: type,
				image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
				bedrooms: bedrooms
			});
			// new_rental.save();
		} 
	}
});
