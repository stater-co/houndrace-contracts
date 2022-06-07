// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract Payments is Params {

	function transferTokens(
		address currency,
		address from,
		address to,
		uint256 amount
	) public payable nonReentrant {
		if ( currency != address(0) ) {
			require(IERC20(currency).transferFrom(from, to, amount));
		} else {
			if ( Address.isContract(to) ) {
				(bool success, )= to.call{ value: msg.value }("");
				require(success);
			} else {
				require(payable(to).send(amount));
			}
		}
	}

	function runPayment(
		Payment.Struct memory payment
	) public payable nonReentrant {
		if ( payment.paymentType == 0 ) {
			IERC721(payment.currency).safeTransferFrom(payment.from, payment.to, payment.id);
		} else if ( payment.paymentType == 1 ) {
			IERC1155(payment.currency).safeBatchTransferFrom(payment.from, payment.to, payment.ids, payment.amounts, "");
		} else if ( payment.paymentType == 2 ) {
			require(IERC20(payment.currency).transferFrom(payment.from, payment.to, payment.amount));
		} else if ( payment.paymentType == 3 ) {
			require(payment.to.send(payment.amount));
		}
	}

	function handleHoundsBreedPayment(HoundsBreedPayment.Struct memory houndsBreedPayment) external payable {
        this.transferTokens{
            value: houndsBreedPayment.breedCostCurrency == address(0) ? houndsBreedPayment.breedCost : 0
        }(
            houndsBreedPayment.breedCostCurrency,
            msg.sender,
            address(this),
            houndsBreedPayment.breedCost
        );

        this.transferTokens{
            value: houndsBreedPayment.breedFeeCurrency == address(0) ? houndsBreedPayment.breedFee : 0
        }(
            houndsBreedPayment.breedFeeCurrency,
            msg.sender,
            houndsBreedPayment.staterApi,
            houndsBreedPayment.breedFee
        );

        require(msg.value >= (houndsBreedPayment.breedCostCurrency == address(0) ? houndsBreedPayment.breedCost : 0) + (houndsBreedPayment.breedFeeCurrency == address(0) ? houndsBreedPayment.breedFee : 0));
        if ( houndsBreedPayment.secondHoundOwned ) {
            require(msg.value >= (houndsBreedPayment.breedCostCurrency == address(0) ? houndsBreedPayment.breedCost : 0) + (houndsBreedPayment.breedFeeCurrency == address(0) ? houndsBreedPayment.breedFee : 0) + (houndsBreedPayment.breedingFeeCurrency == address(0) ? houndsBreedPayment.breedingFee : 0));
            this.transferTokens{
                value: houndsBreedPayment.breedingFeeCurrency == address(0) ? houndsBreedPayment.breedingFee : 0
            }(
                houndsBreedPayment.breedingFeeCurrency,
                msg.sender,
                houndsBreedPayment.foreignOwner,
                houndsBreedPayment.breedingFee
            );
        }
	}

}