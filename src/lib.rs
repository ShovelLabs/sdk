use anchor_lang::prelude::*;

declare_id!("ShovEL11111111111111111111111111111111");

#[program]
pub mod shovel {
    use super::*;

    pub fn send_message(ctx: Context<SendMessage>, content: String) -> Result<()> {
        let message = &mut ctx.accounts.message;
        message.author = *ctx.accounts.author.key;
        message.content = content;
        message.timestamp = Clock::get()?.unix_timestamp;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SendMessage<'info> {
    #[account(init, payer = author, space = 8 + 32 + 4 + 280 + 8)]
    pub message: Account<'info, Message>,
    #[account(mut)]
    pub author: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Message {
    pub author: Pubkey,
    pub content: String,
    pub timestamp: i64,
}
